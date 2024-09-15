import{r as m}from"./vue.esm-bundler-DwcccCfS.js";import{a as h,c as i}from"./index-DI2oft4e.js";import"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";const v={component:h,args:{}},l={render:p=>({components:i,setup:()=>{const e=m({r:0,g:0,b:0}),u=d=>{e.value={...d}};return{args:{outline:!1,color:e,allowAlpha:!0,...p},handleChange:u}},template:`
            <lib-color-Input
                :allowAlpha="args.allowAlpha"
                :modelValue="args.color.value"
                @update:modelValue="handleChange"
            >
            </lib-color-Input>
            Stretched:
            <div class="flex-1 flex">
                <lib-color-Input
                    class="flex-1"
                    :allowAlpha="args.allowAlpha"
                    :modelValue="args.color.value"
                    @update:modelValue="handleChange"
                >
                </lib-color-Input>
            </div>
        `})},a={...l,args:{allowAlpha:!1}};var o,n,r;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const color = ref({
        r: 0,
        g: 0,
        b: 0 /* , a: 0.5 */
      });
      const handleChange = (e: any): void => {
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
            <lib-color-Input
                :allowAlpha="args.allowAlpha"
                :modelValue="args.color.value"
                @update:modelValue="handleChange"
            >
            </lib-color-Input>
            Stretched:
            <div class="flex-1 flex">
                <lib-color-Input
                    class="flex-1"
                    :allowAlpha="args.allowAlpha"
                    :modelValue="args.color.value"
                    @update:modelValue="handleChange"
                >
                </lib-color-Input>
            </div>
        \`
  })
}`,...(r=(n=l.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,t,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Primary,
  args: {
    allowAlpha: false
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const b=["Primary","DoesNotAllowAlpha"];export{a as DoesNotAllowAlpha,l as Primary,b as __namedExportsOrder,v as default};
