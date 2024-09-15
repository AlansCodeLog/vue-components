import{c as k,r as y,o as M,A as P,l as x,n as R,B as D,j as u,k as h,y as g,C as T,D as H,u as n,E as B,g as l,t as K,G as U,m as S,w as _,H as Z,v,I as f,x as w}from"./vue.esm-bundler-DwcccCfS.js";import{t as I}from"./twMerge-Lr_-a9Kp.js";function q(r){return r.length===0}const z=(r,a)=>{const d=k(()=>r.id??a),o=y(!1),s=k(()=>({"aria-label":o.value?void 0:r.label,"aria-labelledby":o.value?`label-${d.value}`:void 0}));return M(()=>{d.value&&document.querySelector(`#label-${d.value}`)&&(o.value=!0)}),s},G=()=>P().uid.toString(),J={disabled:!1,readonly:!1,border:!0,unstyle:!1},Q=["id","type","disabled","data-border","data-color","aria-disabled"],W=["id"],X={key:0},C=x({name:"lib-button",__name:"LibButton",props:R({id:{},label:{},disabled:{type:Boolean},readonly:{type:Boolean},border:{type:Boolean},unstyle:{type:Boolean},color:{type:[String,Boolean]},autoTitleFromAria:{type:Boolean}},{color:!1,label:"",...J}),setup(r){const a=D(),d=G(),o=r,s=z(o,d),i=k(()=>({title:o.autoTitleFromAria?a["aria-label"]??o.label:void 0}));return(e,b)=>{var t;return l(),u("button",B({id:e.id??n(d),class:!e.unstyle&&n(I)(`
			button
			flex
			cursor-pointer
			items-center
			justify-center
			rounded
			px-1
			hover:cursor-pointer
			[&:hover_*]:cursor-pointer
			focus-outline
			disabled:shadow-none
			disabled:text-neutral-500
			disabled:cursor-default
			text-fg
			hover:text-accent-700
			dark:text-bg
			dark:hover:text-accent-500
			dark:disabled:text-neutral-500
			dark:disabled:hover:text-neutral-500
		`,!e.color&&"active:text-neutral-800",e.border&&`
			transition-all
			bg-neutral-100
			shadow-[0_1px_1px_0]
			shadow-neutral-950/20
			hover:shadow-[0_1px_3px_0]
			hover:shadow-neutral-950/30
			hover:border-neutral-300

			relative
			after:absolute
			after:rounded
			after:inset-0
			after:content
			after:shadow-[0_1px_0_0_inset]
			after:shadow-bg/20
			hover:after:shadow-bg/60
			dark:after:shadow-bg/10
			dark:hover:after:shadow-bg/50
			after:pointer-events-none
			after:mix-blend-overlay

			active:shadow-inner
			active:shadow-fg/20
			active:border-transparent
			border
			border-neutral-400
			disabled:border-neutral-200
			disabled:bg-neutral-50

			dark:hover:shadow-accent-950/30
			dark:active:shadow-fg/40
			dark:active:border-neutral-900
			dark:bg-neutral-800
			dark:border-neutral-900
			dark:disabled:border-neutral-800
			dark:disabled:bg-neutral-900
		`,e.border&&(!e.color||e.color==="secondary")&&`
			after:shadow-bg/90
			hover:after:shadow-bg
			dark:after:shadow-bg/20
			dark:hover:after:shadow-bg/90
		`,!e.border&&e.color==="primary"&&`
			font-bold
			hover:text-accent-50
		`,!e.border&&e.color==="ok"&&`
			text-ok-600 hover:text-ok-500
			dark:text-ok-600 dark:hover:text-ok-500
		`,!e.border&&e.color==="warning"&&`
			text-warning-500 hover:text-warning-300
			dark:text-warning-600 dark:hover:text-warning-400
		`,!e.border&&e.color==="danger"&&`
			text-danger-500 hover:text-danger-300
			dark:text-danger-600 dark:hover:text-danger-400
		`,!e.border&&e.color==="secondary"&&`
			text-accent-700 hover:text-accent-500
			dark:text-accent-600 dark:hover:text-accent-400
		`,!e.border&&e.color==="primary"&&`
			text-accent-700 hover:text-accent-500
			dark:text-accent-600 dark:hover:text-accent-400
		`,e.border&&e.color==="ok"&&`
			text-ok-950
			hover:text-ok-800
			bg-ok-400
			border-ok-500
			hover:border-ok-600
			hover:shadow-ok-900/50

			dark:text-ok-100
			dark:hover:text-ok-200
			dark:bg-ok-700
			dark:border-ok-800
			dark:hover:border-ok-900
			dark:hover:shadow-ok-900/30
		`,e.border&&e.color==="warning"&&`
			text-warning-950
			hover:text-warning-900
			bg-warning-300
			border-warning-400
			hover:border-warning-400
			hover:shadow-warning-900/50

			dark:text-warning-100
			dark:hover:text-warning-200
			dark:bg-warning-700
			dark:border-warning-700
			dark:hover:shadow-warning-900/25
		`,e.border&&e.color==="danger"&&`
			text-danger-950
			hover:text-danger-900
			bg-danger-400
			border-danger-500
			hover:border-danger-500
			hover:shadow-danger-900/50

			dark:text-danger-100
			dark:hover:text-danger-200
			dark:bg-danger-900
			dark:border-danger-950
			dark:hover:shadow-ranger-500/10
		`,e.border&&e.color==="secondary"&&`
			text-accent-800
			dark:text-accent-400
		`,e.border&&e.color==="primary"&&`
			text-bg
			hover:text-bg
			bg-accent-600
			border-accent-700
			hover:border-accent-800
			hover:shadow-accent-950/30

			dark:text-bg
			dark:bg-accent-600
			dark:hover:text-accent-200
			dark:border-accent-800
			dark:hover:border-accent-700
			dark:hover:shadow-accent-900/50
		`,(t=n(a))==null?void 0:t.class),type:n(a).type??"submit",tabindex:0,disabled:e.disabled,"data-border":e.border,"data-color":e.color,"aria-disabled":e.disabled},{...i.value,...n(a),class:void 0,...n(s)}),[h("label",{id:`label-${e.id??n(d)}`,class:"label pointer-events-none flex flex-1 items-center justify-center gap-1"},[g(e.$slots,"icon"),g(e.$slots,"default",T(H({label:e.label})),()=>[e.label&&!n(q)(e.label)?(l(),u("span",X,K(e.label),1)):U("",!0)]),g(e.$slots,"icon-after")],8,W)],16,Q)}}});C.__docgenInfo={name:"lib-button",exportName:"default",displayName:"LibButton",description:"",tags:{},props:[{name:"color",defaultValue:{func:!1,value:"false"}},{name:"label",defaultValue:{func:!1,value:'""'}}],slots:[{name:"icon"},{name:"default",scoped:!0,bindings:[{name:"label",title:"binding"}]},{name:"icon-after"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibButton/LibButton.vue"]};const Y={name:"fa"},N=x({...Y,setup(r){const a=D();return(d,o)=>(l(),u("div",B({class:"icon inline-block"},{...n(a),class:void 0}),[g(d.$slots,"default")],16))}});N.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/Icon/Icon.vue"]};const ee={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 512 512"};function ae(r,a){return l(),u("svg",ee,a[0]||(a[0]=[h("path",{fill:"currentColor",d:"M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"},null,-1)]))}const re=S({name:"fa6-solid-circle-half-stroke",render:ae}),oe={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 256 256"};function te(r,a){return l(),u("svg",oe,a[0]||(a[0]=[h("path",{fill:"currentColor",d:"M116 36V20a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 92a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM48 128a12 12 0 0 0-12-12H20a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m80 80a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m108-92h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"},null,-1)]))}const ne=S({name:"ph-sun-bold",render:te}),de={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 512 512"};function le(r,a){return l(),u("svg",de,a[0]||(a[0]=[h("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258 258 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256"},null,-1)]))}const se=S({name:"fa-solid-moon",render:le}),L="prefersColorSchemeDark",E=["system","dark","light"],ie=Symbol("isDarkMode"),ce=({useLocalStorage:r,darkModeOrder:a=E}={})=>{const d=y(!1),o=y(void 0);_(()=>r&&o,()=>{r!==!1&&localStorage.setItem(L,o.value?"true":"false")});const s=k(()=>o.value??d.value),i=k(()=>o.value===void 0?"system":o.value?"dark":"light");function e(t){o.value=t==="dark"?!0:t==="light"?!1:void 0}function b(){const t=a.indexOf(i.value);e(t===2?a[0]:a[t+1])}return M(()=>{if(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{t?d.value=!0:d.value=!1}),r!==!1){const t=typeof r=="string"?r:L,m=localStorage.getItem(t);m==="true"?o.value=!0:m==="false"&&(o.value=!1)}}),Z(ie,s),{darkMode:s,darkModeState:i,setDarkMode:e,cycleDarkMode:b,manualDarkMode:o,systemDarkMode:d}},ue=E,be={name:"lib-dark-mode-switcher"},ke=x({...be,props:{useLocalStorage:{type:[Boolean,String]},darkModeOrder:{default:()=>ue},autoLabel:{type:[Boolean,Object],default:()=>({light:"Light Mode",system:"System Mode",dark:"Dark Mode"})}},emits:["update:darkMode","update:darkModeState"],setup(r,{expose:a,emit:d}){const o=d,s=D(),i=r,{darkMode:e,cycleDarkMode:b,darkModeState:t,manualDarkMode:m,systemDarkMode:V,setDarkMode:A}=ce(i);return _(e,c=>o("update:darkMode",c)),_(t,c=>o("update:darkModeState",c)),a({getUseDarkMode:()=>({darkMode:e,darkModeState:t,manualDarkMode:m,systemDarkMode:V,setDarkMode:A,cycleDarkMode:b})}),M(()=>{o("update:darkMode",e.value)}),(c,he)=>{var $;const F=se,p=N,j=ne,O=re;return l(),v(C,B({...n(s),class:void 0},{class:n(I)(`
			rounded-full
			after:rounded-full
		`,($=n(s))==null?void 0:$.class),title:`Switch dark mode type (current: ${n(t)})`,label:c.autoLabel?c.autoLabel[n(t)]:"",onClick:n(b)}),{icon:f(()=>[h("div",null,[n(t)==="dark"?(l(),v(p,{key:0,class:"w-[1em]"},{default:f(()=>[w(F)]),_:1})):n(t)==="light"?(l(),v(p,{key:1,class:"w-[1em]"},{default:f(()=>[w(j)]),_:1})):(l(),v(p,{key:2,class:"w-[1em]"},{default:f(()=>[w(O)]),_:1}))])]),_:1},16,["class","title","label","onClick"])}}});ke.__docgenInfo={exportName:"default",displayName:"LibDarkModeSwitcher",description:"",tags:{},expose:[{name:"getUseDarkMode"}],props:[{name:"autoLabel",defaultValue:{func:!1,value:`() => ({
    light: "Light Mode",
    system: "System Mode",
    dark: "Dark Mode",
})`}},{name:"darkModeOrder",defaultValue:{func:!1,value:"() => defaultDarkModeOrder"}}],events:[{name:"update:darkMode",type:{names:["boolean"]},description:"Emits whether dark mode should be enabled."},{name:"update:darkModeState",type:{names:["union"],elements:[{name:'"dark"'},{name:'"light"'},{name:'"system"'}]},description:"Emits the change, but as a state string (dark, light, system)"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibDarkModeSwitcher/LibDarkModeSwitcher.vue"]};function fe(r){}const ge={directiveName:"extract-root-el",mounted(r,{value:a}){a(r)},unmounted(r,{value:a}){a(null)},getSSRProps(){return{}}};export{ke as _,C as a,J as b,fe as c,N as d,G as g,q as i,z as u,ge as v};
