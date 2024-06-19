import{I as W,l as U,j as H,J as y,d as $,r as k,A as J,o as V,K as X,b as w,c as S,g as b,e as g,E as Q,F as C,G,D as K,H as Y,L as Z,w as ee,t as te,M as re,C as ie,k as ne}from"./entry.C8qPh40j.js";import{u as oe}from"./index.BRAFz1pF.js";import{_ as se}from"./ProjectCard.BYE54ldM.js";import{u as ae}from"./asyncData.CT5UvCBe.js";import{q as ce}from"./query.D8Z5Xft4.js";import"./Avatar.CqmtRMIg.js";import"./preview.B4Kt807j.js";const de=/#/g,le=/&/g,ue=/\//g,fe=/\?/g,he=/\+/g,me=/%7c/gi,ge=/%252f/gi;function pe(e){return encodeURI(""+e).replace(me,"|")}function D(e){return pe(e).replace(de,"%23").replace(fe,"%3F").replace(ge,"%2F").replace(le,"%26").replace(he,"%2B")}function z(e){return D(e).replace(ue,"%2F")}const _e=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,ve=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,ye=/^([/\\]\s*){2,}[^/\\]/;function E(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?_e.test(e):ve.test(e)||(t.acceptRelative?ye.test(e):!1)}function we(e="",t){return e.endsWith("/")?e:e+"/"}function be(e=""){return e.startsWith("/")}function xe(e=""){return be(e)?e:"/"+e}function Se(e){return e&&e!=="/"}const Ee=/^\.?\//;function I(e,...t){let i=e||"";for(const r of t.filter(n=>Se(n)))if(i){const n=r.replace(Ee,"");i=we(i)+n}else i=r;return i}function F(e="",t){const i=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(i){const[,f,v=""]=i;return{protocol:f.toLowerCase(),pathname:v,href:f+v,auth:"",host:"",search:"",hash:""}}if(!E(e,{acceptRelative:!0}))return t?F(t+e):L(e);const[,r="",n,o=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,s="",a=""]=o.match(/([^#/?]*)(.*)?/)||[],{pathname:d,search:l,hash:u}=L(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r.toLowerCase(),auth:n?n.slice(0,Math.max(0,n.length-1)):"",host:s,pathname:d,search:l,hash:u}}function L(e=""){const[t="",i="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:i,hash:r}}async function Ie(e,t){return await $e(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function $e(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const n={width:r.width,height:r.height,ratio:r.width/r.height};t(n)},r.onerror=n=>i(n),r.src=e})}function P(e){return t=>t?e[t]||t:e.missingValue}function Re({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=P(t));const n=r||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=P(n[o]))}),(o={})=>Object.entries(o).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=n[a];return typeof l=="function"&&(d=l(o[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(i)}function p(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Ae(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function je(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Me(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function ke(e){const t={options:e},i=(n,o={})=>B(t,n,o),r=(n,o={},s={})=>i(n,{...s,modifiers:W(o,s.modifiers||{})}).url;for(const n in e.presets)r[n]=(o,s,a)=>r(o,s,{...e.presets[n],...a});return r.options=e,r.getImage=i,r.getMeta=(n,o)=>ze(t,n,o),r.getSizes=(n,o)=>Ne(t,n,o),t.$img=r,r}async function ze(e,t,i){const r=B(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await Ie(e,r.url)}function B(e,t,i){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:r,defaults:n}=Le(e,i.provider||e.options.provider),o=Pe(e,i.preset);if(t=E(t)?t:xe(t),!r.supportsAlias)for(const f in e.options.alias)t.startsWith(f)&&(t=I(e.options.alias[f],t.substr(f.length)));if(r.validateDomains&&E(t)){const f=F(t).host;if(!e.options.domains.find(v=>v===f))return{url:t}}const s=W(i,o,n);s.modifiers={...s.modifiers};const a=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=p(s.modifiers.width)),(u=s.modifiers)!=null&&u.height&&(s.modifiers.height=p(s.modifiers.height));const d=r.getImage(t,s,e);return d.format=d.format||a||"",d}function Le(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function Pe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Ne(e,t,i){var m,R,A,j,M;const r=p((m=i.modifiers)==null?void 0:m.width),n=p((R=i.modifiers)==null?void 0:R.height),o=Me(i.sizes),s=(A=i.densities)!=null&&A.trim()?Ae(i.densities.trim()):e.options.densities;je(s);const a=r&&n?n/r:0,d=[],l=[];if(Object.keys(o).length>=1){for(const h in o){const _=N(h,String(o[h]),n,a,e);if(_!==void 0){d.push({size:_.size,screenMaxWidth:_.screenMaxWidth,media:`(max-width: ${_.screenMaxWidth}px)`});for(const x of s)l.push({width:_._cWidth*x,src:O(e,t,i,_,x)})}}Oe(d)}else for(const h of s){const _=Object.keys(o)[0];let x=N(_,String(o[_]),n,a,e);x===void 0&&(x={size:"",screenMaxWidth:0,_cWidth:(j=i.modifiers)==null?void 0:j.width,_cHeight:(M=i.modifiers)==null?void 0:M.height}),l.push({width:h,src:O(e,t,i,x,h)})}We(l);const u=l[l.length-1],f=d.length?d.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,v=f?"w":"x",c=l.map(h=>`${h.src} ${h.width}${v}`).join(", ");return{sizes:f,srcset:c,src:u==null?void 0:u.src}}function N(e,t,i,r,n){const o=n.options.screens&&n.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let a=parseInt(t);if(!o||!a)return;s&&(a=Math.round(a/100*o));const d=r?Math.round(a*r):i;return{size:t,screenMaxWidth:o,_cWidth:a,_cHeight:d}}function O(e,t,i,r,n){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*n:void 0,height:r._cHeight?r._cHeight*n:void 0},i)}function Oe(e){var i;e.sort((r,n)=>r.screenMaxWidth-n.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const n=e[r];n.media===t&&e.splice(r,1),t=n.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function We(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const He=Re({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>z(e)+"_"+z(t)}),Ce=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=He(t)||"_";return i||(i=I(r.options.nuxt.baseURL,"/_ipx")),{url:I(i,n,D(e))}},Ge=!0,De=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ce,supportsAlias:De,validateDomains:Ge},Symbol.toStringTag,{value:"Module"})),T={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};T.providers={ipxStatic:{provider:Fe,defaults:{}}};const q=()=>{const e=U(),t=H();return t.$img||t._img||(t._img=ke({...T,nuxt:{baseURL:e.app.baseURL}}))},Be={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Te=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:p(e.width),height:p(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=q(),n=y(()=>({...e.modifiers,width:p(e.width),height:p(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:n}},qe={...Be,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ue=$({name:"NuxtImg",props:qe,emits:["load","error"],setup:(e,t)=>{const i=q(),r=Te(e),n=k(!1),o=y(()=>i.getSizes(e.src,{...r.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...r.modifiers.value,width:p(e.width),height:p(e.height)}})),s=y(()=>{const c={...r.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(c.sizes=o.value.sizes,c.srcset=o.value.srcset),c}),a=y(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||n.value)return!1;if(typeof c=="string")return c;const m=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return i(e.src,{...r.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},r.options.value)}),d=y(()=>e.sizes?o.value.src:i(e.src,r.modifiers.value,r.options.value)),l=y(()=>a.value?a.value:d.value);if(e.preload){const c=Object.values(o.value).every(m=>m);J({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const u=k(),v=H().isHydrating;return V(()=>{if(a.value){const c=new Image;c.src=d.value,e.sizes&&(c.sizes=o.value.sizes||"",c.srcset=o.value.srcset),c.onload=m=>{n.value=!0,t.emit("load",m)};return}u.value&&(u.value.complete&&v&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=c=>{t.emit("load",c)},u.value.onerror=c=>{t.emit("error",c)})}),()=>X("img",{ref:u,src:l.value,...s.value,...t.attrs})}}),Je={class:"space-y-6"},Ve=g("h1",{class:"text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"}," Hello! ",-1),Xe=g("p",{class:"text-gray-900 dark:text-gray-400"}," Hi, I'm Gabe McGuire, a computer science student and part-time developer for the State of Michigan. I thrive in all areas of software development, from front-end work with Vue.js or React to backend development using various languages and frameworks. ",-1),Qe=g("p",{class:"text-gray-900 dark:text-gray-400"}," In my free time I love to dive into my own projects, always eager to learn and experiment with new technologies. ",-1),Ke={__name:"Intro",setup(e){return oe({title:"Gabe McGuire",description:"My name is Gabe McGuire. I'm a computer science student with a diverse skillset."}),(t,i)=>{const r=Ue;return w(),S("div",Je,[b(r,{src:"https://media.licdn.com/dms/image/D5603AQFYeoKMS3JzHQ/profile-displayphoto-shrink_400_400/0/1702611912391?e=1723680000&v=beta&t=1yvlSK9j0Jwf9mLufA9uxeeDIDk52d5gBxVCF6wdKXI",alt:"Gabe McGuire",class:"ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-24 sm:w-24",sizes:"64px sm:64px",placeholder:"",format:"webp"}),Ve,Xe,Qe])}}},Ye=g("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-6"}," FEATURED PROEJCTS ",-1),Ze={class:"space-y-4"},et={class:"flex items-center justify-center mt-6 text-sm"},tt=$({__name:"FeaturedProjects",async setup(e){let t,i;const{data:r}=([t,i]=Q(()=>ae("projects-home",()=>ce("/projects").limit(3).find())),t=await t,i(),t);return(n,o)=>{const s=se,a=Z;return w(),S("div",null,[Ye,g("div",Ze,[(w(!0),S(C,null,G(Y(r),(d,l)=>(w(),K(s,{key:l,project:d},null,8,["project"]))),128))]),g("div",et,[b(a,{label:"All Projects →",to:"/projects",variant:"link",color:"gray"})])])}}}),rt=g("h2",{class:"uppercase text-xs font-semibold text-gray-400 mb-4"},"FIND ME ON",-1),it={class:"space-y-5"},nt={class:"text-sm"},ot=g("div",{class:"flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"},null,-1),st=$({__name:"SocialLinks",setup(e){const t=[{name:"Linkedin",url:"https://www.linkedin.com/in/realgabe/",icon:"mdi:linkedin"},{name:"GitHub",url:"https://github.com/gabemcguire",icon:"mdi:github"}];return(i,r)=>{const n=re,o=ie;return w(),S("div",null,[rt,g("div",it,[(w(),S(C,null,G(t,s=>b(o,{key:s.icon,to:s.url,target:"_blank",external:"",class:"flex items-end gap-4 dark:hover:text-gray-300 group"},{default:ee(()=>[g("span",nt,te(s.name),1),ot,b(n,{name:s.icon,class:"w-6 h-6"},null,8,["name"])]),_:2},1032,["to"])),64))])])}}}),at={},ct={class:"min-h-screen"},dt={class:"space-y-24"};function lt(e,t){const i=Ke,r=tt,n=st;return w(),S("main",ct,[g("div",dt,[b(i),b(r),b(n)])])}const vt=ne(at,[["render",lt]]);export{vt as default};