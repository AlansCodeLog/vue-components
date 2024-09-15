import{f as p,c as m}from"./index-DI2oft4e.js";import"./vue.esm-bundler-DwcccCfS.js";import"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";const g={component:p,args:{slot:"label"}},e={render:o=>({components:m,setup:()=>({args:o}),template:`
                <lib-label v-bind="args">{{args.slot}}</lib-label>
                <br/>
                In flex group with input:
                <div class="flex flex-wrap">
                    <lib-label v-bind="args">{{args.slot}}</lib-label>
                    <lib-simple-input modelValue="some input"></lib-simple-input>
                </div>
        `})},r={...e,args:{...e.args,type:"top"}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
                <lib-label v-bind="args">{{args.slot}}</lib-label>
                <br/>
                In flex group with input:
                <div class="flex flex-wrap">
                    <lib-label v-bind="args">{{args.slot}}</lib-label>
                    <lib-simple-input modelValue="some input"></lib-simple-input>
                </div>
        \`
  })
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    type: "top"
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const f=["Primary","TopStyle"];export{e as Primary,r as TopStyle,f as __namedExportsOrder,g as default};
