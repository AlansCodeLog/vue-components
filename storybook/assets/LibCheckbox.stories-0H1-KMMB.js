import{_ as m,c as d}from"./index-DI2oft4e.js";import"./vue.esm-bundler-DwcccCfS.js";import"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";const g={component:m,args:{modelValue:!0,label:"Label"}},e={render:c=>({components:d,setup:()=>({args:c}),template:`
            <lib-checkbox v-bind="args" v-model="args.modelValue"></lib-checkbox>
            <br>
            Opposite State:
            <br>
            <lib-checkbox v-bind="args" :modelValue="!args.modelValue" @update:modelValue="args.modelValue = !$event"></lib-checkbox>
        `})},a={...e,args:{disabled:!0}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <lib-checkbox v-bind="args" v-model="args.modelValue"></lib-checkbox>
            <br>
            Opposite State:
            <br>
            <lib-checkbox v-bind="args" :modelValue="!args.modelValue" @update:modelValue="args.modelValue = !$event"></lib-checkbox>
        \`
  })
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,t,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const V=["Primary","Disabled"];export{a as Disabled,e as Primary,V as __namedExportsOrder,g as default};
