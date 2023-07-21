import"./extractRootEl-447eb833.js";import{t as z,c as P}from"./index-16470db9.js";import"./vue.esm-bundler-73ebc217.js";function h(r){return r.charAt(0).toUpperCase()+r.slice(1)}const B={component:z,args:{label:"Label",icon:"bell"}},e={render:r=>({components:P,setup:()=>({args:r,capitalize:h}),template:`
        <div class="flex gap-4 justify-center">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary' ]">
                <lib-button v-bind="{...args, color: type, label: args.label + ' ' + capitalize(type || 'false')}">
                </lib-button>
            </template>
        </div>
        <div class="flex flex-col gap-4 pt-10">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary']">
                <lib-button v-bind="{...args, color: type , label: args.label + ' ' + capitalize(type || 'false') }">
                </lib-button>
            </template>
        </div>
        `})},a={...e,args:{...e.args,disabled:!0}},s={...e,args:{...e.args,border:!1}},t={...e,args:{...e.args,border:!1,disabled:!0}},n={render:r=>({components:P,setup:()=>({args:r}),template:`
        <div class="flex gap-4 justify-center">
            <lib-button v-bind="{...args}">
                <div>Div inside button still has a pointer cursor.</div>
            </lib-button>
        </div>
        `})};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components,
    setup: () => ({
      args,
      capitalize
    }),
    template: \`
        <div class="flex gap-4 justify-center">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary' ]">
                <lib-button v-bind="{...args, color: type, label: args.label + ' ' + capitalize(type || 'false')}">
                </lib-button>
            </template>
        </div>
        <div class="flex flex-col gap-4 pt-10">
            <template v-for="type of [false, 'ok', 'warning', 'danger', 'primary', 'secondary']">
                <lib-button v-bind="{...args, color: type , label: args.label + ' ' + capitalize(type || 'false') }">
                </lib-button>
            </template>
        </div>
        \`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,m,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,f,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false,
    disabled: true
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const _=["Primary","Disabled","Borderless","BorderlessDisabled","WithDivInside"];export{s as Borderless,t as BorderlessDisabled,a as Disabled,e as Primary,n as WithDivInside,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=LibButton.stories-8130c475.js.map
