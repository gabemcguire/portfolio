import{_ as s}from"./Avatar.CU41Bbxu.js";import{b as n,D as c,w as d,e as t,t as r,g as i,C as l}from"./entry.B494AaWi.js";const m={class:"max-w-sm"},_={class:"text-sm font-medium group-hover:text-primary-600"},u={class:"text-gray-400 text-sm"},p=t("div",{class:"flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"},null,-1),j={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){return(x,g)=>{const o=s,a=l;return n(),c(a,{class:"flex items-end gap-4 group p-2 -m-2 rounded-lg",to:e.project.url,target:"_blank",external:""},{default:d(()=>[t("div",m,[t("h3",_,r(e.project.name),1),t("p",u,r(e.project.description),1)]),p,i(o,{src:e.project.thumbnail,ui:{rounded:"rounded z-10 relative"},size:"md",alt:e.project.name},null,8,["src","alt"])]),_:1},8,["to"])}}};export{j as _};