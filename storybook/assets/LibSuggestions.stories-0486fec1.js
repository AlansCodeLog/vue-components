import{r as n}from"./vue.esm-bundler-73ebc217.js";import{b as O,c as C}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const L={component:O,args:{id:"some-id",modelValue:"A",label:"Some Label",border:!0,suggestions:["A","AB","ABC","B","BC","C"]}},e={render:r=>({components:{...C,LibSuggestions:O},setup:()=>{const l=n(r.modelValue),B=n(r.modelValue),u=n(null),h=i=>{var s;(s=u.value)==null||s.inputKeydownHandler(i)},T=i=>{var s;(s=u.value)==null||s.inputBlurHandler(i),r.canOpen=!1};return{args:r,inputValue:l,modelValue:B,canOpen:n(!0),isOpen:n(!1),drawer:u,keydownHandler:h,blurHandler:T}},template:`
            <div class="flex flex-col gap-3">
            Temporary Value: {{inputValue}}
            Value Selected: {{modelValue}}
                <lib-simple-input
                    :class="isOpen ? 'open' : ''"
                    v-model="inputValue"
                    @focus="args.canOpen=true"
                    @blur="blurHandler"
                    @keydown="keydownHandler"
                ></lib-simple-input>
                <lib-suggestions
                    ref="drawer"
                    v-bind="{...args}"
                    :canOpen="true"
                    v-model="modelValue"
                    v-model:inputValue="inputValue"
                >
                    <template #item={item}>
                        {{item}}
                    </template>
                </lib-suggestions>
            </div>
        `}),args:{}},t={...e,args:{...e.args,restrictToSuggestions:!0}},a={...e,args:{...e.args,restrictToSuggestions:!0,suggestionsFilter:(r,l)=>l}},o={...e,args:{...e.args,restrictToSuggestions:!0,suggestions:[{label:"A",other:"some data A"},{label:"AB",other:"some data AB"},{label:"ABC",other:"some data ABC"}],suggestionLabel:r=>r.label}};var d,m,p,c,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibSuggestions
    },
    setup: () => {
      const inputValue = ref(args.modelValue);
      const modelValue = ref(args.modelValue);
      const drawer = ref<typeof LibSuggestions | null>(null);
      const keydownHandler = (e: KeyboardEvent): void => {
        drawer.value?.inputKeydownHandler(e);
      };
      const blurHandler = (e: MouseEvent) => {
        drawer.value?.inputBlurHandler(e);
        args.canOpen = false;
      };
      return {
        args,
        inputValue,
        modelValue,
        canOpen: ref(true),
        isOpen: ref(false),
        drawer,
        keydownHandler,
        blurHandler
      };
    },
    template: \`
            <div class="flex flex-col gap-3">
            Temporary Value: {{inputValue}}
            Value Selected: {{modelValue}}
                <lib-simple-input
                    :class="isOpen ? 'open' : ''"
                    v-model="inputValue"
                    @focus="args.canOpen=true"
                    @blur="blurHandler"
                    @keydown="keydownHandler"
                ></lib-simple-input>
                <lib-suggestions
                    ref="drawer"
                    v-bind="{...args}"
                    :canOpen="true"
                    v-model="modelValue"
                    v-model:inputValue="inputValue"
                >
                    <template #item={item}>
                        {{item}}
                    </template>
                </lib-suggestions>
            </div>
        \`
  }),
  args: {}
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`The suggestions component is just the dropdown part.

Here it is decoupled from the input and forced open.

More example can be found in the input component.`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};var b,V,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    restrictToSuggestions: true
  }
}`,...(f=(V=t.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var y,S,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    restrictToSuggestions: true,
    suggestionsFilter: (_input: string, items: string[]) => items
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var A,v,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    restrictToSuggestions: true,
    suggestions: [{
      label: "A",
      other: "some data A"
    }, {
      label: "AB",
      other: "some data AB"
    }, {
      label: "ABC",
      other: "some data ABC"
    }],
    suggestionLabel: (item: any) => item.label
  }
}`,...(H=(v=o.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const _=["Primary","RestrictToSuggestions","AlwaysShowAllSuggestions","CustomSuggestionsObject"];export{a as AlwaysShowAllSuggestions,o as CustomSuggestionsObject,e as Primary,t as RestrictToSuggestions,_ as __namedExportsOrder,L as default};
//# sourceMappingURL=LibSuggestions.stories-0486fec1.js.map
