import{r as P,a as R}from"./vue.esm-bundler-73ebc217.js";import{f as E,c as h}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const w={component:E,args:{label:"Label",_timeout:1e3,_add:10,_start:50}},e={render:r=>({components:h,setup:()=>{const a=P(r._start);if(r.progress)a.value=r.progress;else{const x=setInterval(()=>{a.value>=100?a.value=0:a.value+=r._add},r._timeout);R(()=>{clearInterval(x)})}return{args:{...r},progress:a}},template:`
            <lib-progress-bar class="flex-1" v-bind="args" :progress="progress"></lib-progress-bar>
            <br/>
            Stretched in flexbox:
            <div class="flex w-full">
                <lib-progress-bar class="flex-1" v-bind="args" :progress="progress"></lib-progress-bar>
            </div>
        `})},s={...e,args:{...e.args}},n={...e,args:{...e.args,label:"Really Long Label Label to See Effect Really Long Label Label to See Effect Really Long Label Label to See Effect Really Long Label Label to See Effect"}},o={...e,args:{...e.args,progress:50}},t={...e,args:{...e.args,autohideOnComplete:500,clamp:[10,100],_start:0,_timeout:1e3,_add:10}};var l,c,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const progress = ref((args._start as number));
      if (args.progress) {
        progress.value = args.progress;
      } else {
        const interval = setInterval(() => {
          if (progress.value >= 100) {
            progress.value = 0;
          } else {
            progress.value += (args._add as number);
          }
        }, args._timeout);
        onUnmounted(() => {
          clearInterval(interval);
        });
      }
      return {
        args: {
          ...args
        },
        progress
      };
    },
    template: \`
            <lib-progress-bar class="flex-1" v-bind="args" :progress="progress"></lib-progress-bar>
            <br/>
            Stretched in flexbox:
            <div class="flex w-full">
                <lib-progress-bar class="flex-1" v-bind="args" :progress="progress"></lib-progress-bar>
            </div>
        \`
  })
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,b,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    label: "Really Long Label Label to See Effect Really Long Label Label to See Effect Really Long Label Label to See Effect Really Long Label Label to See Effect"
  }
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,L,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    progress: 50
  }
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,S,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    autohideOnComplete: 500,
    clamp: [10, 100],
    _start: 0,
    // keepSpaceWhenHidden: true,
    _timeout: 1000,
    _add: 10
  }
}`,...(_=(S=t.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const A=["Primary","Secondary","ReallyLongLabel","Static","AutoHiding"];export{t as AutoHiding,e as Primary,n as ReallyLongLabel,s as Secondary,o as Static,A as __namedExportsOrder,w as default};
//# sourceMappingURL=LibProgressBar.stories-49786a83.js.map
