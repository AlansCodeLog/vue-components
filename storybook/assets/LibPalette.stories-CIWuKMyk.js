import{l as g,n as b,j as a,k as l,F as _,p as y,u as h,g as o,q as v,t as x}from"./vue.esm-bundler-DwcccCfS.js";import{r as P,c as L}from"./index-DI2oft4e.js";import{t as B}from"./theme-C2xVjMeH.js";import{b as k}from"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C8YNoefG.js";import"../sb-preview/runtime.js";const j={class:"flex h-full flex-col items-center justify-center"},D={class:"container mx-auto"},F={class:"grid grid-cols-11 gap-2 gap-y-10 px-10"},N={name:"lib-palette"},r=g({...N,props:b({id:{},disabled:{type:Boolean},readonly:{type:Boolean},border:{type:Boolean},unstyle:{type:Boolean},theme:{}},{theme:()=>({}),...k}),setup(s){const p=s,d=["--color-bg","--color-fg"],u=P(p.theme.css).filter(e=>e.startsWith("--color")&&!d.includes(e)).map(e=>e.replace("--color-","bg-"));return(e,C)=>(o(),a("div",j,[l("div",D,[l("div",F,[(o(!0),a(_,null,y(h(u),(n,f)=>(o(),a("div",{key:n,class:v(`h-10 ${n} rounded flex items-center justify-center text-fg dark:text-bg`)},x([5,16,27,38,49].includes(f)?"Text":""),3))),128))])])]))}});r.__docgenInfo={exportName:"default",displayName:"LibPalette",description:"",tags:{},props:[{name:"theme",defaultValue:{func:!1,value:"() => ({} as any)"}}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibPalette/LibPalette.vue"]};const T={component:r,args:{}},t={render:s=>({components:{...L,LibPalette:r},setup:()=>({args:{...s,theme:B}}),template:`
            <LibPalette v-bind="{...args}">{{args.value}}</LibPalette>
        `})};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibPalette
    },
    setup: () => ({
      args: {
        ...args,
        theme
      }
    }),
    template: \`
            <LibPalette v-bind="{...args}">{{args.value}}</LibPalette>
        \`
  })
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["Primary"];export{t as Primary,W as __namedExportsOrder,T as default};
