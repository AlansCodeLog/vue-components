import{r as i}from"./vue.esm-bundler-DwcccCfS.js";import{L as g,c as d}from"./index-DI2oft4e.js";import"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";const b={component:g,args:{}},e={render:c=>({components:d,setup:()=>{const a=i({r:0,g:0,b:0}),u=m=>{a.value={...m}};return{args:{outline:!1,color:a,allowAlpha:!0,...c},handleChange:u}},template:`
            <test-wrapper :outline="args.outline">
            {{args.color}}
            <lib-color-picker
                :allowAlpha="args.allowAlpha"
                :modelValue="args.color.value"
                @update:modelValue="handleChange"
            >
            </lib-color-picker>
            </test-wrapper>
        `})},r={...e,args:{allowAlpha:!1}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const color = ref({
        r: 0,
        g: 0,
        b: 0 /* , a: 0.5 */
      });
      const handleChange = (e: any) => {
        color.value = {
          ...e
        };
      };
      return {
        args: {
          outline: false,
          color,
          allowAlpha: true,
          ...args
        },
        handleChange
      };
    },
    template: \`
            <test-wrapper :outline="args.outline">
            {{args.color}}
            <lib-color-picker
                :allowAlpha="args.allowAlpha"
                :modelValue="args.color.value"
                @update:modelValue="handleChange"
            >
            </lib-color-picker>
            </test-wrapper>
        \`
  })
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Primary,
  args: {
    allowAlpha: false
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const C=["Primary","DoesNotAllowAlpha"];export{r as DoesNotAllowAlpha,e as Primary,C as __namedExportsOrder,b as default};
