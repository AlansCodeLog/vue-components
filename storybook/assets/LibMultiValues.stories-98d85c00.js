import{r as s}from"./vue.esm-bundler-73ebc217.js";import{k as g,c as E}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const k={component:g,args:{values:["A","B","C"],border:!0}},e={render:a=>({components:{...E,LibMultiValues:g},setup:()=>{const r=s("B"),h=s(null);return{args:a,inputValue:r,multiValueEl:h,onKeydownEnter:f=>{f.key==="Enter"&&a.values.push(r.value)}}},template:`
            Press enter to add value.
            <lib-simple-input
                v-model="inputValue"
                @keydown="onKeydownEnter"
            >
            </lib-simple-input>
            <lib-multi-values
                ref="multiValueEl"
                v-bind="args"
                v-model:values="args.values"
            >
            </lib-multi-values>
        `})},n={...e,args:{disabled:!0}},t={...e,args:{readonly:!0}};var o,l,i,u,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibMultiValues
    },
    setup: () => {
      const inputValue = ref("B");
      const multiValueEl = ref<typeof LibMultiValues | null>(null);
      const onKeydownEnter = (e: KeyboardEvent): void => {
        if (e.key === "Enter") args.values.push(inputValue.value);
      };
      return {
        args,
        inputValue,
        multiValueEl,
        onKeydownEnter
      };
    },
    template: \`
            Press enter to add value.
            <lib-simple-input
                v-model="inputValue"
                @keydown="onKeydownEnter"
            >
            </lib-simple-input>
            <lib-multi-values
                ref="multiValueEl"
                v-bind="args"
                v-model:values="args.values"
            >
            </lib-multi-values>
        \`
  })
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source},description:{story:"The multi-value component is just the values part beneath the input.\n\nThis is a simple example of how it can be combined with the simple-input component to create an input with multiple values.\n\nNote that setting the `disabled` or `readonly` props won't prevent the component from accepting an updated `values` prop. Disabling adding must be done separately from whatever is controlling the component (e.g. the input in this case).",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,b,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Primary,
  args: {
    readonly: true
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const _=["Primary","Disabled","Readonly"];export{n as Disabled,e as Primary,t as Readonly,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=LibMultiValues.stories-98d85c00.js.map
