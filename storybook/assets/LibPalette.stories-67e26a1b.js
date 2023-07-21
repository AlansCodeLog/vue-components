import{e as f,r as b,f as s,g as i,F as _,h,u as v,i as a,n as y,t as x}from"./vue.esm-bundler-73ebc217.js";import{k as P}from"./extractRootEl-447eb833.js";import{u as L,v as k,c as V}from"./index-16470db9.js";import{t as q}from"./theme-704c1d39.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-f7e03f75.js";import"../sb-preview/runtime.js";const B={class:"flex h-full flex-col items-center justify-center"},j={class:"container mx-auto"},F={class:"grid grid-cols-11 gap-2 gap-y-10 px-10"},I={name:"lib-palette"},n=f({...I,props:{...L(),...k,modelValue:{type:String,required:!0},theme:{type:Object,required:!0}},emits:["update:modelValue"],setup(r,{emit:N}){const p=r;b(null);const u=["--color-bg","--color-fg"],d=P(p.theme.css).filter(e=>e.startsWith("--color")&&!u.includes(e)).map(e=>e.replace("--color-","bg-"));return(e,S)=>(a(),s("div",B,[i("div",j,[i("div",F,[(a(!0),s(_,null,h(v(d),(o,g)=>(a(),s("div",{key:o,class:y(`h-10 ${o} rounded flex items-center justify-center text-fg dark:text-bg`)},x([5,16,27,38,49].includes(g)?"Text":""),3))),128))])])]))}});n.__docgenInfo={exportName:"default",displayName:"LibPalette",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!0},{name:"theme",type:{name:"Theme"},required:!0}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/vue-components/vue-components/src/components/LibPalette/LibPalette.vue"]};const W={component:n,args:{}},t={render:r=>({components:{...V,LibPalette:n},setup:()=>({args:{...r,theme:q}}),template:`
            <LibPalette v-bind="{...args}">{{args.value}}</LibPalette>
        `})};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const $=["Primary"];export{t as Primary,$ as __namedExportsOrder,W as default};
//# sourceMappingURL=LibPalette.stories-67e26a1b.js.map
