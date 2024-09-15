import{m as j,g as $,j as C,k as O}from"./vue.esm-bundler-DwcccCfS.js";import{c as _}from"./index-DI2oft4e.js";import{a as E}from"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";function F(a){return a.charAt(0).toUpperCase()+a.slice(1)}const V={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 448 512"};function W(a,i){return $(),C("svg",V,i[0]||(i[0]=[O("path",{fill:"currentColor",d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71"},null,-1)]))}const H=j({name:"fa-solid-bell",render:W}),U={component:E,args:{label:"Label",iconBefore:!0}},e={render:a=>({components:{..._,IconFaSolidBell:H},setup:()=>({args:a,capitalize:F}),template:`
        <div class="flex gap-4 justify-center">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary' ]">
                <lib-button v-bind="{...args, color: type, label: !args.label ? undefined : args.label + ' ' + capitalize(type || 'false')}">
                    <template #icon>
                        <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                    </template>
                </lib-button>
            </template>
        </div>
        <div class="flex flex-col gap-4 pt-10">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary']">
                <lib-button v-bind="{...args, color: type , label: !args.label ? undefined : args.label + ' ' + capitalize(type || 'false') }">
                    ${a.iconBefore?`
                    <template #icon=>
                        <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                    </template>
                    `:""}
                    ${a.iconAfter?`
                        <template #icon-after>
                            <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                        </template>
                    `:""}
                </lib-button>
            </template>
        </div>
        `})},r={...e,args:{...e.args,iconAfter:!0,iconBefore:!1}},s={...e,args:{...e.args,label:void 0}},t={...e,args:{...e.args,disabled:!0}},o={...e,args:{...e.args,border:!1}},n={...e,args:{...e.args,border:!1,disabled:!0}},l={render:a=>({components:_,setup:()=>({args:a}),template:`
        <div class="flex gap-4 justify-center">
            <lib-button v-bind="{...args}">
                <div>Div inside button still has a pointer cursor.</div>
            </lib-button>
        </div>
        `})};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      ...components,
      IconFaSolidBell
    },
    setup: () => ({
      args,
      capitalize
    }),
    template: \`
        <div class="flex gap-4 justify-center">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary' ]">
                <lib-button v-bind="{...args, color: type, label: !args.label ? undefined : args.label + ' ' + capitalize(type || 'false')}">
                    <template #icon>
                        <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                    </template>
                </lib-button>
            </template>
        </div>
        <div class="flex flex-col gap-4 pt-10">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary']">
                <lib-button v-bind="{...args, color: type , label: !args.label ? undefined : args.label + ' ' + capitalize(type || 'false') }">
                    \${args.iconBefore ? \`
                    <template #icon=>
                        <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                    </template>
                    \` : \`\`}
                    \${args.iconAfter ? \`
                        <template #icon-after>
                            <icon class="w-[1em]"><icon-fa-solid-bell /></icon>
                        </template>
                    \` : \`\`}
                </lib-button>
            </template>
        </div>
        \`
  })
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,b,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    iconAfter: true,
    iconBefore: false
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    label: undefined
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,B,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var x,P,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false
  }
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var k,S,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false,
    disabled: true
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,A,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: any) => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
        <div class="flex gap-4 justify-center">
            <lib-button v-bind="{...args}">
                <div>Div inside button still has a pointer cursor.</div>
            </lib-button>
        </div>
        \`
  })
}`,...(z=(A=l.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const q=["Primary","IconAfter","OnlyIcon","Disabled","Borderless","BorderlessDisabled","WithDivInside"];export{o as Borderless,n as BorderlessDisabled,t as Disabled,r as IconAfter,s as OnlyIcon,e as Primary,l as WithDivInside,q as __namedExportsOrder,U as default};
