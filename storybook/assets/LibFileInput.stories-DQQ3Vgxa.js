import{r as A}from"./vue.esm-bundler-DwcccCfS.js";import{e as C,c as _}from"./index-DI2oft4e.js";import"./vExtractRootEl-CIAiCZ2R.js";import"./twMerge-Lr_-a9Kp.js";const k={component:C,args:{}},r={render:t=>({components:_,setup:()=>{function e(l){console.log(l)}return{args:t,errorHandler:e}},template:`
            <lib-file-input v-bind="{...args}" @errors="errorHandler"></lib-file-input>
        `})},n={...r,args:{...r.args,multiple:!0}},s={...r,args:{...r.args,multiple:!0,formats:[]}},o={...r,args:{...r.args,compact:!0}},a={render:t=>({components:_,setup:()=>{const e=A([]);return{args:t,errors:e,errorHandler:x=>e.value=x}},template:`
            <lib-debug :title="'Errors'">{{errors}}</lib-debug>
            <lib-file-input v-bind="{...args}"  @errors="errorHandler"></lib-file-input>
        `})};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      function errorHandler(e: any): void {
        // eslint-disable-next-line no-console
        console.log(e);
      }
      return {
        args,
        errorHandler
      };
    },
    template: \`
            <lib-file-input v-bind="{...args}" @errors="errorHandler"></lib-file-input>
        \`
  })
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    multiple: true
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    multiple: true,
    formats: []
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var H,S,F;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    compact: true
  }
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var v,E,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const errors = ref([]);
      const errorHandler = (e: any) => errors.value = e;
      return {
        args,
        errors,
        errorHandler
      };
    },
    template: \`
            <lib-debug :title="'Errors'">{{errors}}</lib-debug>
            <lib-file-input v-bind="{...args}"  @errors="errorHandler"></lib-file-input>
        \`
  })
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const q=["SingleFile","MultipleFile","AnyFormat","Compact","ErrorHandling"];export{s as AnyFormat,o as Compact,a as ErrorHandling,n as MultipleFile,r as SingleFile,q as __namedExportsOrder,k as default};
