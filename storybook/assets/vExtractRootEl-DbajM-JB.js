import{c as h,r as _,o as M,B as j,l as x,n as R,C as $,j as u,k,y as g,D as T,E as H,u as n,G as D,g as s,t as U,H as Z,m as B,w as y,v,I as f,x as w}from"./vue.esm-bundler-DHmVcdJx.js";import{t as I}from"./twMerge-Bw-RVb8v.js";function q(a){return a.length===0}const z=(a,o)=>{const d=h(()=>a.id??o),r=_(!1),l=h(()=>({"aria-label":r.value?void 0:a.label,"aria-labelledby":r.value?`label-${d.value}`:void 0}));return M(()=>{d.value&&document.querySelector(`#label-${d.value}`)&&(r.value=!0)}),l},G=()=>j().uid.toString(),K={disabled:!1,readonly:!1,border:!0,unstyle:!1},J=["id","type","disabled","data-border","data-color","aria-disabled"],Q=["id"],W={key:0},C=x({name:"lib-button",__name:"LibButton",props:R({id:{},label:{},disabled:{type:Boolean},readonly:{type:Boolean},border:{type:Boolean},unstyle:{type:Boolean},color:{type:[String,Boolean]},autoTitleFromAria:{type:Boolean}},{color:!1,label:"",...K}),setup(a){const o=$(),d=G(),r=a,l=z(r,d),i=h(()=>({title:r.autoTitleFromAria?o["aria-label"]??r.label:void 0}));return(e,b)=>{var t;return s(),u("button",D({id:e.id??n(d),class:!e.unstyle&&n(I)(`
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
		`,(t=n(o))==null?void 0:t.class),type:n(o).type??"submit",tabindex:0,disabled:e.disabled,"data-border":e.border,"data-color":e.color,"aria-disabled":e.disabled},{...i.value,...n(o),class:void 0,...n(l)}),[k("label",{id:`label-${e.id??n(d)}`,class:"label pointer-events-none flex flex-1 items-center justify-center gap-1"},[g(e.$slots,"icon"),g(e.$slots,"default",T(H({label:e.label})),()=>[e.label&&!n(q)(e.label)?(s(),u("span",W,U(e.label),1)):Z("",!0)]),g(e.$slots,"icon-after")],8,Q)],16,J)}}});C.__docgenInfo={name:"lib-button",exportName:"default",displayName:"LibButton",description:"",tags:{},props:[{name:"color",defaultValue:{func:!1,value:"false"}},{name:"label",defaultValue:{func:!1,value:'""'}}],slots:[{name:"icon"},{name:"default",scoped:!0,bindings:[{name:"label",title:"binding"}]},{name:"icon-after"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibButton/LibButton.vue"]};const X={name:"fa"},N=x({...X,setup(a){const o=$();return(d,r)=>(s(),u("div",D({class:"icon inline-block"},{...n(o),class:void 0}),[g(d.$slots,"default")],16))}});N.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/Icon/Icon.vue"]};const Y={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block"},class:"icon",viewBox:"0 0 512 512"},ee=k("path",{fill:"currentColor",d:"M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"},null,-1),ae=[ee];function re(a,o){return s(),u("svg",Y,[...ae])}const oe=B({name:"fa6-solid-circle-half-stroke",render:re}),te={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block"},class:"icon",viewBox:"0 0 256 256"},ne=k("path",{fill:"currentColor",d:"M116 36V20a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 92a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM48 128a12 12 0 0 0-12-12H20a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m80 80a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m108-92h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"},null,-1),de=[ne];function se(a,o){return s(),u("svg",te,[...de])}const le=B({name:"ph-sun-bold",render:se}),ie={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block"},class:"icon",viewBox:"0 0 512 512"},ce=k("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258 258 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256"},null,-1),ue=[ce];function be(a,o){return s(),u("svg",ie,[...ue])}const he=B({name:"fa-solid-moon",render:be}),L="prefersColorSchemeDark",E=["system","dark","light"],ke=({useLocalStorage:a,darkModeOrder:o=E}={})=>{const d=_(!1),r=_(void 0);y(()=>a&&r,()=>{a!==!1&&localStorage.setItem(L,r.value?"true":"false")});const l=h(()=>r.value??d.value),i=h(()=>r.value===void 0?"system":r.value?"dark":"light");function e(t){r.value=t==="dark"?!0:t==="light"?!1:void 0}function b(){const t=o.indexOf(i.value);e(t===2?o[0]:o[t+1])}return M(()=>{if(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{t?d.value=!0:d.value=!1}),a!==!1){const t=typeof a=="string"?a:L,m=localStorage.getItem(t);m==="true"?r.value=!0:m==="false"&&(r.value=!1)}}),{darkMode:l,darkModeState:i,setDarkMode:e,cycleDarkMode:b,manualDarkMode:r,systemDarkMode:d}},me=E,ve={name:"lib-dark-mode-switcher"},fe=x({...ve,props:{useLocalStorage:{type:[Boolean,String]},darkModeOrder:{default:()=>me},autoLabel:{type:[Boolean,Object],default:()=>({light:"Light Mode",system:"System Mode",dark:"Dark Mode"})}},emits:["update:darkMode","update:darkModeState"],setup(a,{expose:o,emit:d}){const r=d,l=$(),i=a,{darkMode:e,cycleDarkMode:b,darkModeState:t,manualDarkMode:m,systemDarkMode:V,setDarkMode:A}=ke(i);return y(e,c=>r("update:darkMode",c)),y(t,c=>r("update:darkModeState",c)),o({getUseDarkMode:()=>({darkMode:e,darkModeState:t,manualDarkMode:m,systemDarkMode:V,setDarkMode:A,cycleDarkMode:b})}),M(()=>{r("update:darkMode",e.value)}),(c,ge)=>{var S;const F=he,p=N,O=le,P=oe;return s(),v(C,D({...n(l),class:void 0},{class:n(I)(`
			rounded-full
			after:rounded-full
		`,(S=n(l))==null?void 0:S.class),title:`Switch dark mode type (current: ${n(t)})`,label:c.autoLabel?c.autoLabel[n(t)]:"",onClick:n(b)}),{icon:f(()=>[k("div",null,[n(t)==="dark"?(s(),v(p,{key:0,class:"w-[1em]"},{default:f(()=>[w(F)]),_:1})):n(t)==="light"?(s(),v(p,{key:1,class:"w-[1em]"},{default:f(()=>[w(O)]),_:1})):(s(),v(p,{key:2,class:"w-[1em]"},{default:f(()=>[w(P)]),_:1}))])]),_:1},16,["class","title","label","onClick"])}}});fe.__docgenInfo={exportName:"default",displayName:"LibDarkModeSwitcher",description:"",tags:{},expose:[{name:"getUseDarkMode"}],props:[{name:"autoLabel",defaultValue:{func:!1,value:`() => ({
    light: "Light Mode",
    system: "System Mode",
    dark: "Dark Mode",
})`}},{name:"darkModeOrder",defaultValue:{func:!1,value:"() => defaultDarkModeOrder"}}],events:[{name:"update:darkMode",type:{names:["boolean"]},description:"Emits whether dark mode should be enabled."},{name:"update:darkModeState",type:{names:["union"],elements:[{name:'"dark"'},{name:'"light"'},{name:'"system"'}]},description:"Emits the change, but as a state string (dark, light, system)"}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibDarkModeSwitcher/LibDarkModeSwitcher.vue"]};function _e(a){}const ye={directiveName:"extract-root-el",mounted(a,{value:o}){o(a)},unmounted(a,{value:o}){o(null)},getSSRProps(){return{}}};export{fe as _,C as a,K as b,_e as c,N as d,G as g,q as i,z as u,ye as v};
