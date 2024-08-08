import{r as p}from"./vue.esm-bundler-DHmVcdJx.js";import{j as m,c as s}from"./index-BZRD67xE.js";import"./vExtractRootEl-DbajM-JB.js";import"./twMerge-Bw-RVb8v.js";const v={component:m,args:{total:10}},n={render:l=>({components:s,setup(){const e=p(1);return{changePage:(o,a)=>{o.preventDefault(),a>=10&&(e.value=10),a<=1&&(e.value=1),e.value=a},args:l,num:e}},template:`
            <lib-pagination v-bind="{...args, current: num, route:'#'}">
                <template #link="linkProps">
                    <a v-bind="linkProps" @click="changePage($event, linkProps.i)">{{ linkProps.text ?? linkProps.i }}</a>
                </template>
            </lib-pagination>
            <lib-input :label="'Change Page'" :modelValue="num.toString()" @update:modelValue="num = parseInt($event)" type="number" min="0" :max="args.total">

            </lib-input>
        `})};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup() {
      const num = ref(1);
      const changePage = ($event: any, i: any) => {
        $event.preventDefault();
        if (i >= 10) num.value = 10;
        if (i <= 1) num.value = 1;
        num.value = i;
      };
      return {
        changePage,
        args,
        num
      };
    },
    template: \`
            <lib-pagination v-bind="{...args, current: num, route:'#'}">
                <template #link="linkProps">
                    <a v-bind="linkProps" @click="changePage($event, linkProps.i)">{{ linkProps.text ?? linkProps.i }}</a>
                </template>
            </lib-pagination>
            <lib-input :label="'Change Page'" :modelValue="num.toString()" @update:modelValue="num = parseInt($event)" type="number" min="0" :max="args.total">

            </lib-input>
        \`
  })
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["Primary"];export{n as Primary,b as __namedExportsOrder,v as default};
