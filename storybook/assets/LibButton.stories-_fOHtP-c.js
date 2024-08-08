import{m as z,g as j,j as $,k as C}from"./vue.esm-bundler-DHmVcdJx.js";import{c as A}from"./index-BZRD67xE.js";import{a as O}from"./vExtractRootEl-DbajM-JB.js";import"./twMerge-Bw-RVb8v.js";function E(a){return a.charAt(0).toUpperCase()+a.slice(1)}const F={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block"},class:"icon",viewBox:"0 0 448 512"},V=C("path",{fill:"currentColor",d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71"},null,-1),W=[V];function H(a,M){return j(),$("svg",F,[...W])}const L=z({name:"fa-solid-bell",render:H}),G={component:O,args:{label:"Label",iconBefore:!0}},e={render:a=>({components:{...A,IconFaSolidBell:L},setup:()=>({args:a,capitalize:E}),template:`
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
        `})},r={...e,args:{...e.args,iconAfter:!0,iconBefore:!1}},s={...e,args:{...e.args,label:void 0}},o={...e,args:{...e.args,disabled:!0}},t={...e,args:{...e.args,border:!1}},n={...e,args:{...e.args,border:!1,disabled:!0}},l={render:a=>({components:A,setup:()=>({args:a}),template:`
        <div class="flex gap-4 justify-center">
            <lib-button v-bind="{...args}">
                <div>Div inside button still has a pointer cursor.</div>
            </lib-button>
        </div>
        `})};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    iconAfter: true,
    iconBefore: false
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    label: undefined
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,v,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var h,x,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var _,w,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false,
    disabled: true
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,D,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const J=["Primary","IconAfter","OnlyIcon","Disabled","Borderless","BorderlessDisabled","WithDivInside"];export{t as Borderless,n as BorderlessDisabled,o as Disabled,r as IconAfter,s as OnlyIcon,e as Primary,l as WithDivInside,J as __namedExportsOrder,G as default};
