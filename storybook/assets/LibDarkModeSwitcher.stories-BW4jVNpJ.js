import{r as i}from"./vue.esm-bundler-DwcccCfS.js";import{_ as p}from"./vExtractRootEl-CIAiCZ2R.js";import{c as u}from"./index-DI2oft4e.js";import"./twMerge-Lr_-a9Kp.js";const g={component:p,args:{}},r={render:c=>({components:u,setup:()=>{const m=i(!1);return{args:c,darkMode:m}},template:`
            Value: {{darkMode}}
            <LibDarkModeSwitcher 
                @update:darkMode="darkMode = $event"
                v-bind="{...args}"
            ></LibDarkModeSwitcher>
            
        `})},e={...r,args:{...r.args,autoLabel:!1}};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const darkMode = ref(false);
      return {
        args,
        darkMode
      };
    },
    template: \`
            Value: {{darkMode}}
            <LibDarkModeSwitcher 
                @update:darkMode="darkMode = $event"
                v-bind="{...args}"
            ></LibDarkModeSwitcher>
            
        \`
  })
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,t,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    autoLabel: false
  }
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const b=["Primary","WithoutLabel"];export{r as Primary,e as WithoutLabel,b as __namedExportsOrder,g as default};
