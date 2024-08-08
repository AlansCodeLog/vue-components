import{r as a,c as R,w as T}from"./vue.esm-bundler-DHmVcdJx.js";import{k as w,c as B}from"./index-BZRD67xE.js";import{v as E}from"./vExtractRootEl-DbajM-JB.js";import"./twMerge-Bw-RVb8v.js";const k={component:w,args:{}},e={render:l=>({components:B,directives:{extractRootEl:E},setup:()=>{const s=a(!1),o=["TL","TC","TR","BL","BC","BR"],t=a("TL"),i=a(!0),h=R(()=>{switch(t.value){case"TL":return"align-self: flex-start; justify-self: flex-start;";case"TC":return"align-self: flex-start; justify-self: center;";case"TR":return"align-self: flex-start; justify-self: flex-end;";case"BL":return"align-self: flex-end; justify-self: flex-start;";case"BC":return"align-self: flex-end; justify-self: center;";case"BR":return"align-self: flex-end; justify-self: flex-end;";default:return""}});return T(s,()=>{if(!s.value&&i.value){const u=o.indexOf(t.value);u<5?t.value=o[u+1]:t.value=o[0]}}),{args:l,buttonPos:t,autoRotatePos:i,buttonStyle:h,value:s}},template:`
            <lib-input
                :suggestions="['TL', 'TR', 'BL', 'BR']"
                :restrict-to-suggestions="true"
                :suggestions-filter="(_, items) => items"
                :label="'Button Position'"
                v-model="buttonPos"
            >
            </lib-input>
            <div>
                <label>Auto Rotate Position</label>
                <input type="checkbox" v-model="autoRotatePos">
            </div>
            <div class="test" style="display:grid;height:80vh;padding:50px;border:1px solid black;">

            <lib-popup
                v-model="value"
                v-bind="{
                    preferredHorizontal:args.preferredHorizontal, 
                    preferredVertical:args.preferredVertical
                }"
            >
            {{value}}
                <template #button="{extractEl}">
                    <lib-button :style="buttonStyle" @click="value = !value" v-extract-root-el="extractEl">Toggle Popup</lib-button>
                </template>
                <template #popup="{position, extractEl}">
                    <lib-debug v-extract-root-el="extractEl" :style="args.width ? 'width: ${l.width};' : ''" class="bg-bg dark:bg-fg">
                        {{ position }}
                    </lib-debug>
                </template>
            </lib-popup>
            </div>
            `})},n={...e,args:{...e,width:"110vw"}},r={...e,args:{...e,width:"500px",preferredHorizontal:["center-screen"],preferredVertical:["center-screen"]}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components,
    directives: {
      extractRootEl: vExtractRootEl
    },
    setup: () => {
      const value = ref(false);
      const buttonPositions = (["TL", "TC", "TR", "BL", "BC", "BR"] as const);
      const buttonPos = ref<typeof buttonPositions[number]>("TL");
      const autoRotatePos = ref(true);
      const buttonStyle = computed(() => {
        switch (buttonPos.value) {
          case "TL":
            return \`align-self: flex-start; justify-self: flex-start;\`;
          case "TC":
            return \`align-self: flex-start; justify-self: center;\`;
          case "TR":
            return \`align-self: flex-start; justify-self: flex-end;\`;
          case "BL":
            return \`align-self: flex-end; justify-self: flex-start;\`;
          case "BC":
            return \`align-self: flex-end; justify-self: center;\`;
          case "BR":
            return \`align-self: flex-end; justify-self: flex-end;\`;
          default:
            return "";
        }
      });
      watch(value, () => {
        if (!value.value && autoRotatePos.value) {
          const buttonI = buttonPositions.indexOf(buttonPos.value);
          if (buttonI < 5) {
            buttonPos.value = buttonPositions[buttonI + 1];
          } else {
            buttonPos.value = buttonPositions[0];
          }
        }
      });
      return {
        args,
        buttonPos,
        autoRotatePos,
        buttonStyle,
        value
      };
    },
    template: \`
            <lib-input
                :suggestions="['TL', 'TR', 'BL', 'BR']"
                :restrict-to-suggestions="true"
                :suggestions-filter="(_, items) => items"
                :label="'Button Position'"
                v-model="buttonPos"
            >
            </lib-input>
            <div>
                <label>Auto Rotate Position</label>
                <input type="checkbox" v-model="autoRotatePos">
            </div>
            <div class="test" style="display:grid;height:80vh;padding:50px;border:1px solid black;">

            <lib-popup
                v-model="value"
                v-bind="{
                    preferredHorizontal:args.preferredHorizontal, 
                    preferredVertical:args.preferredVertical
                }"
            >
            {{value}}
                <template #button="{extractEl}">
                    <lib-button :style="buttonStyle" @click="value = !value" v-extract-root-el="extractEl">Toggle Popup</lib-button>
                </template>
                <template #popup="{position, extractEl}">
                    <lib-debug v-extract-root-el="extractEl" :style="args.width ? 'width: \${args.width};' : ''" class="bg-bg dark:bg-fg">
                        {{ position }}
                    </lib-debug>
                </template>
            </lib-popup>
            </div>
            \`
  })
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,b,g,v,m;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary,
    width: "110vw"
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"When the popup is too wide, it's positioned to the left and overflow scroll is set with an invisible scrollbar.",...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.description}}};var x,P,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary,
    width: "500px",
    preferredHorizontal: ["center-screen"],
    preferredVertical: ["center-screen"]
  }
}`,...(y=(P=r.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const z=["Primary","PopupTooBig","PopupCenterScreen"];export{r as PopupCenterScreen,n as PopupTooBig,e as Primary,z as __namedExportsOrder,k as default};
