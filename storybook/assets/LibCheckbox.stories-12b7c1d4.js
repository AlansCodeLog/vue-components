import{s as d,c as m}from"./index-16470db9.js";import"./vue.esm-bundler-73ebc217.js";import"./extractRootEl-447eb833.js";const u={component:d,args:{modelValue:!0,label:"Label"}},e={render:c=>({components:m,setup:()=>({args:c}),template:`
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,n,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const g=["Primary","Disabled"];export{a as Disabled,e as Primary,g as __namedExportsOrder,u as default};
//# sourceMappingURL=LibCheckbox.stories-12b7c1d4.js.map
