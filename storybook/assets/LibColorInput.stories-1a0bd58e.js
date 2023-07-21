import{r as m}from"./vue.esm-bundler-73ebc217.js";import{r as h,c as g}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const w={component:h,args:{}},l={render:p=>({components:g,setup:()=>{const e=m({r:0,g:0,b:0}),u=d=>{e.value={...d}};return{args:{outline:!1,color:e,allowAlpha:!0,...p},handleChange:u}},template:`
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
        `})},a={...l,args:{allowAlpha:!1}};var n,o,r;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(o=l.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,t,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Primary,
  args: {
    allowAlpha: false
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const b=["Primary","DoesNotAllowAlpha"];export{a as DoesNotAllowAlpha,l as Primary,b as __namedExportsOrder,w as default};
//# sourceMappingURL=LibColorInput.stories-1a0bd58e.js.map
