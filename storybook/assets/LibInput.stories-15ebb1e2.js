import{r as s,w as ye}from"./vue.esm-bundler-73ebc217.js";import{m as n,c as A}from"./index-16470db9.js";import{c as We,a as Le}from"./storybook-297326c6.js";import"./extractRootEl-447eb833.js";const xe={component:n,args:{modelValue:"A",border:!0,label:"Some Label"}},r={render:a=>({components:{...A,LibInput:n},setup:()=>({args:a}),template:`
            <div> Value: {{args.modelValue}}</div>
            <lib-input
                v-bind="args"
                v-model:values="args.values"
                v-model="args.modelValue"
            >
            Some Label
            </lib-input>
            <lib-input
                v-bind="args"
                v-model:values="args.values"
                v-model="args.modelValue"
            >
            Some Label
            </lib-input>
        `})},o={...r,args:{disabled:!0}},l={...r,args:{readonly:!0}},u={...r,args:{valid:!1}},i={...r,args:{type:"password"}},d={...r,args:{type:"date"}},c={...r,args:{type:"number"}},t={...r,args:{suggestions:["A","AB","ABC"]}},m={...t,args:{...t.args,restrictToSuggestions:!0}},p={...t,args:{...t.args,restrictToSuggestions:!0,suggestions:[{label:"A",other:"some data A"},{label:"AB",other:"some data AB"},{label:"ABC",other:"some data ABC"}],suggestionLabel:a=>a.label}},g={render:a=>({components:{...A,LibInput:n},setup:()=>({args:a}),template:`
            <div> Value: {{args.modelValue}}</div>

            <lib-input
                v-bind="args"
                v-model="args.modelValue"
                v-model:values="args.values"
            >
                <template #label>
                    Custom Label Slot
                </template>
                <template #outer-left>
                    <lib-button >
                        Outer Left Slot
                    </lib-button>
                </template>
                <template #left>
                    <lib-button  class="px-0" :border="false" :label="'none'">
                        <fa :icon="'chevron-left'"/>
                    </lib-button>
                </template>
                <template #right>
                    <lib-button  class="px-0" :border="false"  :label="'none'">
                        <fa :icon="'chevron-right'"/>
                    </lib-button>
                </template>
                <template #outer-right>
                    <lib-button  >
                        Outer Right Slot
                    </lib-button>
                </template>
            </lib-input>
        `})},e={render:a=>({components:{...A,LibInput:n},setup:()=>({args:a}),template:`
            <div> Value: {{args.modelValue}}</div>
            <lib-input
                v-bind="args"
                v-model="args.modelValue"
                v-model:values="args.values"
            >
                <template #left>
                    <lib-button class="px-0" :border="false">
                        <fa :icon="'tags solid'"/>
                    </lib-button>
                </template>
            </lib-input>
        `}),args:{values:["A","B","C"]}},b={...e,args:{...e.args,suggestions:["A","AB","ABC"]}},v={...e,args:{...e.args,disabled:!0}},V={...e,args:{...e.args,readonly:!0}},f={render:a=>({components:{...A,LibInput:n},setup:()=>{const h=s(!1),S=s(""),y=s("K E Y S"),W=s(a.values??[]),L=s(null),Se=We(S,h,y,L);return ye(Le(S,h,y,W)),{recorder:Se,recording:h,recordingValue:S,recorderEl:L,modelValue:y,values:W,args:a}},template:`
            <div> Value: {{modelValue}} {{values}} {{recording}}</div>
            <lib-input
                v-bind="args"
                v-model="modelValue"
                v-model:values="values"
            >
                <template #input >
                    <lib-recorder
                        class="p-0"
                        v-extract-root-el="_ => recorderEl = _"
                        :border="false"
                        :recordingValue="recordingValue"
                        :recorder="recorder"
                        v-model:recording="recording"
                        v-model="modelValue"
                        @recorder:click="recording = !recording"
                        @recorder:blur="recordingValue = modelValue; recording = false"
                    />
                </template>
                <template #left>
                    <lib-button class="px-0" :disabled="true" :border="false">
                        <fa :icon="'keyboard solid'"/>
                    </lib-button>
                </template>
            </lib-input>
        `}),args:{values:["A","B","C"]}};var B,C,M;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibInput
    },
    setup: () => ({
      args
    }),
    template: \`
            <div> Value: {{args.modelValue}}</div>
            <lib-input
                v-bind="args"
                v-model:values="args.values"
                v-model="args.modelValue"
            >
            Some Label
            </lib-input>
            <lib-input
                v-bind="args"
                v-model:values="args.values"
                v-model="args.modelValue"
            >
            Some Label
            </lib-input>
        \`
  })
}`,...(M=(C=r.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var E,x,I;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var P,R,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Primary,
  args: {
    readonly: true
  }
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,w,k;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Primary,
  args: {
    valid: false
  }
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,T,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Primary,
  args: {
    type: "password"
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var H,K,N;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Primary,
  args: {
    type: "date"
  }
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Y,q,z;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Primary,
  args: {
    type: "number"
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,G,J;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Primary,
  args: {
    suggestions: ["A", "AB", "ABC"]
  }
}`,...(J=(G=t.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...WithAutosuggest,
  args: {
    ...WithAutosuggest.args,
    restrictToSuggestions: true
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...WithAutosuggest,
  args: {
    ...WithAutosuggest.args,
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
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibInput
    },
    setup: () => ({
      args
    }),
    template: \`
            <div> Value: {{args.modelValue}}</div>

            <lib-input
                v-bind="args"
                v-model="args.modelValue"
                v-model:values="args.values"
            >
                <template #label>
                    Custom Label Slot
                </template>
                <template #outer-left>
                    <lib-button >
                        Outer Left Slot
                    </lib-button>
                </template>
                <template #left>
                    <lib-button  class="px-0" :border="false" :label="'none'">
                        <fa :icon="'chevron-left'"/>
                    </lib-button>
                </template>
                <template #right>
                    <lib-button  class="px-0" :border="false"  :label="'none'">
                        <fa :icon="'chevron-right'"/>
                    </lib-button>
                </template>
                <template #outer-right>
                    <lib-button  >
                        Outer Right Slot
                    </lib-button>
                </template>
            </lib-input>
        \`
  })
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,oe,le,ue;e.parameters={...e.parameters,docs:{...(se=e.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibInput
    },
    setup: () => ({
      args
    }),
    template: \`
            <div> Value: {{args.modelValue}}</div>
            <lib-input
                v-bind="args"
                v-model="args.modelValue"
                v-model:values="args.values"
            >
                <template #left>
                    <lib-button class="px-0" :border="false">
                        <fa :icon="'tags solid'"/>
                    </lib-button>
                </template>
            </lib-input>
        \`
  }),
  args: {
    values: ["A", "B", "C"]
  }
}`,...(oe=(ne=e.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Press enter to add a value.",...(ue=(le=e.parameters)==null?void 0:le.docs)==null?void 0:ue.description}}};var ie,de,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...WithMultipleValues,
  args: {
    ...WithMultipleValues.args,
    suggestions: ["A", "AB", "ABC"]
  }
}`,...(ce=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...WithMultipleValues,
  args: {
    ...WithMultipleValues.args,
    disabled: true
  }
}`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,ve,Ve;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...WithMultipleValues,
  args: {
    ...WithMultipleValues.args,
    readonly: true
  }
}`,...(Ve=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var fe,Ae,he;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibInput
    },
    setup: () => {
      const recording = ref(false);
      const recordingValue = ref("");
      const modelValue = ref("K E Y S");
      const values = ref(args.values ?? []);
      const recorderEl = ref(null);
      const recorder = createRecorderHandler(recordingValue, recording, modelValue, recorderEl);
      watchEffect(createRecorderWatchEffect(recordingValue, recording, modelValue, values));
      return {
        recorder,
        recording,
        recordingValue,
        recorderEl,
        modelValue,
        values,
        args
      };
    },
    template: \`
            <div> Value: {{modelValue}} {{values}} {{recording}}</div>
            <lib-input
                v-bind="args"
                v-model="modelValue"
                v-model:values="values"
            >
                <template #input >
                    <lib-recorder
                        class="p-0"
                        v-extract-root-el="_ => recorderEl = _"
                        :border="false"
                        :recordingValue="recordingValue"
                        :recorder="recorder"
                        v-model:recording="recording"
                        v-model="modelValue"
                        @recorder:click="recording = !recording"
                        @recorder:blur="recordingValue = modelValue; recording = false"
                    />
                </template>
                <template #left>
                    <lib-button class="px-0" :disabled="true" :border="false">
                        <fa :icon="'keyboard solid'"/>
                    </lib-button>
                </template>
            </lib-input>
        \`
  }),
  args: {
    values: ["A", "B", "C"]
  }
}`,...(he=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:he.source}}};const Ie=["Primary","Disabled","Readonly","Invalid","AttrsPassword","AttrsDate","AttrsNumber","WithAutosuggest","AutosuggestSelectLike","AutosuggestObjectOptions","Slots","WithMultipleValues","WithMultipleValuesWithSuggestions","WithMultipleValuesDisabled","WithMultipleValuesReadonly","InputSlotReplacement"];export{d as AttrsDate,c as AttrsNumber,i as AttrsPassword,p as AutosuggestObjectOptions,m as AutosuggestSelectLike,o as Disabled,f as InputSlotReplacement,u as Invalid,r as Primary,l as Readonly,g as Slots,t as WithAutosuggest,e as WithMultipleValues,v as WithMultipleValuesDisabled,V as WithMultipleValuesReadonly,b as WithMultipleValuesWithSuggestions,Ie as __namedExportsOrder,xe as default};
//# sourceMappingURL=LibInput.stories-15ebb1e2.js.map
