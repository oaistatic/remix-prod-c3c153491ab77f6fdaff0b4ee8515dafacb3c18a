import{f9 as _,V as m,Z as R,w as p,G as h}from"./njq6ygky3ttysgdk.js";import{A as S,f as E,r as o,j as O}from"./fs6h2trisr1juto6.js";const f="chatgpt://oauth_complete",C=_(function(){const{pluginId:t,code:i,state:n,error:r,errorDesc:c}=S(),e=E(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function d(){const g=`https://chat.openai.com/aip/${t}/oauth/callback`;try{const a=await R.pluginOauthCallback(t,i,g,n);if(a.success)if(a.redirect_path===f)window.location.href=f;else{const s=new URL(p(h.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),e(s.pathname+s.search+s.hash)}else e(p(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{e({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:t,loginSuccess:"false"}).toString()})}}d()},[t,i,n,e]);const l=m();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),O.jsx("div",{})});export{C as default};
//# sourceMappingURL=kai9oakst5nid4d8.js.map
