import{j as e,e as I,r as u,d as Q,M as a,n as G}from"./fs6h2trisr1juto6.js";import{gb as c,bw as Z,c5 as S,aq as ee,ct as te,dv as _,dA as ae,d as se}from"./njq6ygky3ttysgdk.js";import{A as re}from"./gyif1j2ovuhfzvqr.js";import{hk as A,d7 as H,jd as b,d as oe,ja as ie,di as ne,aj as le,bI as ce,ad as de}from"./d7a6rc8fexfzu7dt.js";import{Y as D}from"./mzkxlhrlmxhntkvn.js";import{b as N,a as L,F as ue}from"./bkmz6jrk6gvxlvc5.js";import{R as U}from"./n0uw1tdsn3tnvms3.js";import{G as me,a as pe}from"./l7v5z6auvs5uvrpg.js";import"./koxewv8brsagv80m.js";import"./ms40jzicf31mvoix.js";import"./eq34zwf9q18c17ro.js";import"./ijutvl794yycgs5p.js";import"./csg4i0wk6hi0jvkd.js";import"./lj0prj6na7gf1jpf.js";import"./n9whwsbg0rx5cs8k.js";import"./hg126uudzxua38kv.js";import"./en8ogvlmn3lccz09.js";import"./bhsw6t55h66bayr8.js";import"./m89x2zftpo6hrypr.js";import"./wqepkoieaii7q4ep.js";import"./cffgjlidl1olpt2q.js";import"./i6ze5suolzahci5v.js";import"./jyg6m0czwgwjnl3i.js";import"./kukctmibghbbqwq7.js";import"./gunpso70jnmarvod.js";import"./gvhvfcdqhc5unmaw.js";import"./fu6bathgya5b9rdr.js";import"./gfo75oujoeaedm5y.js";import"./npeck75bz46c490i.js";import"./m97sb2fnwj0a6vyo.js";import"./cm0hdcditutj2jz2.js";import"./jcoe6v231ph25bfi.js";import"./edu70w7ha0obetrt.js";import"./nikuofry28tl503c.js";import"./e8xv89i2w2jwxlj7.js";import"./bsxrqnfqv5abpjom.js";import"./f426ftnka0mj72hs.js";import"./nfsyatvjas08jshp.js";import"./o634nz6bc7e8bevz.js";import"./ohq33fk3dbalo2mk.js";function he({content:r,button:d,onClick:i}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:i,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:r}),e.jsx("div",{className:"w-px bg-token-border-medium"}),d]})}function xe({onSelectExample:r}){const d=I(),i=u.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);r(B[t].spec),i.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:i,children:[e.jsx("option",{value:"label",className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(E.examples)}),B.map((l,t)=>e.jsx("option",{value:t,className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(l.displayName)},t))]})}const fe={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ge=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.1.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: https://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            maximum: 100
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      maxItems: 100
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string`,ye={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},E=Q({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),B=[{displayName:E.weatherExampleTitle,spec:JSON.stringify(fe,null,2)},{displayName:E.petStoreExampleTitle,spec:ge},{displayName:E.blankExampleTitle,spec:JSON.stringify(ye,null,2)}];function je({onImport:r,onClose:d}){const[i,l]=u.useState(""),[t,m]=u.useState(!1);async function p(){let g;try{g=new URL(i)}catch{return}if(g?.hostname){m(!0);try{const o=await H.fetchOpenAPISpec(i);r(o.content),d()}finally{m(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:i,onChange:g=>{l(g.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(A,{color:"primary",size:"small",loading:t,onClick:p,children:e.jsx(a,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(A,{color:"secondary",size:"small",onClick:d,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function y({children:r}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:r})}function ve({jitPluginTool:r,onUpdateTool:d,onClose:i}){const l=I(),[t,m]=u.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:r?.metadata?.auth?.client_url??"",oauthTokenUrlValue:r?.metadata?.auth?.authorization_url??"",oauthScopeValue:r?.metadata?.auth?.scope??"",authTypeValue:r?.metadata?.auth?.type??c.None,httpAuthTypeValue:r?.metadata?.auth?.authorization_type??"basic",customHeaderValue:r?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:r?.metadata?.auth?.token_exchange_method??"default_post"});function p(o){m(w=>({...w,...o}))}function g(){d(t.authTypeValue===c.None?{type:c.None}:t.authTypeValue===c.OAuth?{type:c.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:c.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),i()}return e.jsxs(Z,{type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(S,{color:"primary",onClick:()=>{g()},children:e.jsx(a,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(S,{color:"secondary",onClick:i,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:i,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(a,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(U.Root,{onValueChange:o=>{p({authTypeValue:o})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:c.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:c.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:c.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:o=>{p({apiKeyValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(U.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:o=>{p({httpAuthTypeValue:o})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(a,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:o=>{p({customHeaderValue:o.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:o=>{p({oauthClientIdValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:o=>{p({oauthClientSecretValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:o=>{p({oauthAuthUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:o=>{p({oauthTokenUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:o=>{p({oauthScopeValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(U.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:o=>{p({tokenExchangeMethodValue:o})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]}),e.jsx(a,{id:"x19klG",defaultMessage:"Warning: OAuth may fail if you don't allow our redirect URLs. Visit <link>this documentation</link> to learn more.",values:{link:o=>e.jsx("a",{href:"https://platform.openai.com/docs/actions/authentication",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:o})}})]}):null]})}function be({rootDomain:r,operations:d}){return d==null||d.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),d.map(i=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:i.operationName}),e.jsx("td",{className:"py-2 uppercase",children:i.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:i.path}),e.jsx("td",{className:"py-2",children:e.jsx(A,{color:"secondary",onClick:()=>{r&&me.publish({kind:pe.TestGizmoAction,rootDomain:r,operationName:i.operationName})},children:e.jsx(a,{id:"Ag71GQ",defaultMessage:"Test"})})})]},i.operationName))]})})}function Ne({validationResponse:r}){const d=I();return e.jsxs("div",{children:[e.jsx(L,{label:d.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(be,{rootDomain:r.success?r.spec.root_domain:void 0,operations:r.success?r.spec.operations:void 0})]})}const Me=window.location.origin+"/g/g-TYEliDU6A-actionsgpt";function ke(r){switch(r){case c.None:return G({id:"G9qfIC",defaultMessage:"None"});case c.OAuth:return G({id:"t8MwwT",defaultMessage:"OAuth"});case c.ServiceHTTP:return G({id:"rN0uCi",defaultMessage:"API Key"})}}function ut({currentlyEditingActionDomain:r,gizmoEditorData:d,updateGizmo:i,onClose:l}){const t=I(),[m,p]=u.useState(r),g=u.useRef(m),o=ee(),{data:w}=te(o?.getWorkspaceId());u.useEffect(()=>{g.current=m},[m]);const x=d?.tools?.find(s=>s.type===_.JIT_PLUGIN&&s.metadata.domain===m),[J]=u.useState(()=>x==null),M=x?.metadata?.raw_spec??"",[W,R]=u.useState(!1),[F,z]=u.useState(!1),[C,K]=u.useState(!1),f=u.useCallback(s=>{i(h=>({...h,tools:x?h.tools.map(n=>n.type===_.JIT_PLUGIN&&n.metadata.domain===m?{...n,metadata:{...n.metadata,...s,json_schema:void 0}}:n):[...h.tools,{type:_.JIT_PLUGIN,metadata:{raw_spec:"",domain:m??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))},[m,x,i]),[k,P]=u.useState(),X=d,[V]=u.useState(()=>oe(async function(h){const n=await H.validateOpenAPISpec(h);P(n);const j=n.success?n.spec.root_domain:void 0;if(j){if(j!==g.current&&X?.tools?.find(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===j)){P({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}i(T=>({...T,tools:T.tools.map(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===g.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),p(j)}if(n.success&&n.known_auth&&n.known_privacy_policy&&x){const T={type:c.OAuth,...n.known_auth};ae(x.metadata.auth,T)||f({auth:{type:c.OAuth,...n.known_auth}}),x.metadata.privacy_policy_url!==n.known_privacy_policy&&f({privacy_policy_url:n.known_privacy_policy})}},1e3)),O=k!=null?k.success?k.warnings:k.errors:void 0;u.useEffect(()=>{M===""?(P(void 0),V.cancel()):V(M)},[V,M]);const q=s=>{try{f({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{f({raw_spec:D.stringify(D.parse(s),{lineWidth:120,indent:2})})}catch{}}},$=u.useCallback(s=>{switch(s.type){case c.None:{f({auth:{type:c.None}});break}case c.OAuth:{const{oauth_client_id:h,oauth_client_secret:n,...j}=s;f({auth:j,oauth_client_id:h,oauth_client_secret:n});break}case c.ServiceHTTP:{const{api_key:h,...n}=s;f({auth:n,api_key:h});break}}},[f]),Y=u.useCallback(()=>{window.confirm("Are you sure you want to delete this action?")&&(i(s=>({...s,tools:s.tools.filter(h=>!(h.type===_.JIT_PLUGIN&&h.metadata.domain===m))})),l())},[m,l,i]);return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(S,{color:"secondary",onClick:l,icon:ie})}),x!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(S,{color:"secondary",onClick:Y,className:"text-red-500",children:e.jsx(ne,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:J?e.jsx(a,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(a,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(a,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(ue,{className:"relative",children:[e.jsx(L,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(he,{onClick:()=>{R(!0)},content:t.formatMessage(ke(x?.metadata?.auth?.type??c.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(le,{className:"icon-sm"})})}),W&&e.jsx(ve,{jitPluginTool:x,onUpdateTool:$,onClose:()=>R(!1)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(a,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:F?e.jsx(je,{onImport:s=>q(s),onClose:()=>z(!1)}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{color:"secondary",size:"small",onClick:()=>z(!0),children:e.jsx(a,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(xe,{onSelectExample:s=>{f({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{f({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:M!==""?e.jsx(A,{onClick:()=>{q(M)},children:e.jsx(a,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(A,{as:"a",to:Me,openNewTab:!0,size:"small",children:[e.jsx(a,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(ce,{className:"icon-md"})]})})]}),O!=null&&O?.length>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:O.map((s,h)=>e.jsx("div",{children:s},h))})]})]}),k!=null&&e.jsx(Ne,{validationResponse:k}),w?.allowed_custom_actions_domains!=null&&(w?.allowed_custom_actions_domains?.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>K(!C),children:[e.jsx(a,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(re,{className:"inline",checked:C})]}),e.jsx("ul",{className:se("list-disc ps-4",!C&&"hidden"),children:w?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(a,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(L,{htmlFor:"privacyPolicyUrl",label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(de,{ariaLabel:!1,name:"privacyPolicyUrl",value:x?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{f({privacy_policy_url:s.target.value})}})]})]})}export{ut as GizmoActionsEditor};
//# sourceMappingURL=oup4desc8vdmka1t.js.map
