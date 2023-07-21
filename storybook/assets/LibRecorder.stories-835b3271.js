import{r as n,w as H}from"./vue.esm-bundler-73ebc217.js";import{c as I,a as T}from"./storybook-297326c6.js";import{e as D,c as W}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const O={component:D,args:{label:"Some Label",recordingTitle:"Recording. Press enter or click away to accept. Press escape to cancel.",modelValue:"K E Y S"},parameters:{docs:{description:{component:`This is a special input component designed to record any type of event.

It requires additional setup to actually work since what and how anything is recorded is up to the needs of the application.

This basic implementation just lists the keys. Enter accepts the recording, escape cancels back to the initial value.`}}}},e={render:d=>({components:W,setup:()=>{const c=n(!1),t=n(""),s=n(d.modelValue),l=n(null),x=I(t,c,s,l);return H(T(t,c,s)),{args:d,modelValue:s,recorder:x,recording:c,recordingValue:t,recorderEl:l}},template:`
            <lib-recorder
                v-bind="args"
                v-extract-root-el="_ => recorderEl = _"
                :recordingValue="recordingValue"
                :recorder="recorder"
                v-model:recording="recording"
                v-model="modelValue"
                @recorder:click="recording = !recording"
            />
        `})},r={...e,args:{disabled:!0}},o={...e,args:{readonly:!0}},a={...e,args:{modelValue:""}};var i,m,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const recording = ref(false);
      const recordingValue = ref("");
      const modelValue = ref(args.modelValue);
      const recorderEl = ref(null);
      const recorder = createRecorderHandler(recordingValue, recording, modelValue, recorderEl);
      watchEffect(createRecorderWatchEffect(recordingValue, recording, modelValue));
      return {
        args,
        modelValue,
        recorder,
        recording,
        recordingValue,
        recorderEl
      };
    },
    template: \`
            <lib-recorder
                v-bind="args"
                v-extract-root-el="_ => recorderEl = _"
                :recordingValue="recordingValue"
                :recorder="recorder"
                v-model:recording="recording"
                v-model="modelValue"
                @recorder:click="recording = !recording"
            />
        \`
  })
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b,V,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"Should not be tabbable or recordable.",...(f=(V=r.parameters)==null?void 0:V.docs)==null?void 0:f.description}}};var y,h,E,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Primary,
  args: {
    readonly: true
  }
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source},description:{story:"*Should* be tabbable but not recordable.",...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var _,k,w,P,R;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Primary,
  args: {
    modelValue: ""
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Height should not shrink.",...(R=(P=a.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};const Y=["Primary","Disabled","Readonly","EmptyInitialValue"];export{r as Disabled,a as EmptyInitialValue,e as Primary,o as Readonly,Y as __namedExportsOrder,O as default};
//# sourceMappingURL=LibRecorder.stories-835b3271.js.map
