import{f as u,g as c,c as i,a as t,t as a,h as l,o as _}from"./entry.e66b62f9.js";import{u as d}from"./fetch.82e69e1a.js";const p={border:"1 px solid"},h=t("thead",null,[t("th",null,"Symbol"),t("th",null,"Rank"),t("th",null,"Price - US $"),t("th",null,"Market Cap - US $")],-1),x={__name:"[id]",async setup(m){let n,s;const o=u(),{data:r}=([n,s]=c(()=>d("/api/ticker/?id="+o.params.id,"$2vkVphECD9")),n=await n,s(),n),e=r.value[0];return(k,f)=>(_(),i("div",null,[t("h2",null,a(l(e).name)+" Detail page",1),t("table",p,[h,t("tr",null,[t("td",null,a(l(e).symbol),1),t("td",null,a(l(e).rank),1),t("td",null,a(l(e).price_usd),1),t("td",null,a(l(e).market_cap_usd),1)])])]))}};export{x as default};
