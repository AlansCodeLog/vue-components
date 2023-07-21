import{r as l,c as x,b as y}from"./vue.esm-bundler-73ebc217.js";import{g as P,c as h}from"./index-16470db9.js";import{e as R}from"./extractRootEl-447eb833.js";const L={component:P,args:{}},t={render:a=>({components:h,directives:{extractRootEl:R},setup:()=>{const s=l(!1),o=["TL","TC","TR","BL","BC","BR"],e=l("TL"),i=l(!0),m=x(()=>{switch(e.value){case"TL":return"align-self: flex-start; justify-self: flex-start;";case"TC":return"align-self: flex-start; justify-self: center;";case"TR":return"align-self: flex-start; justify-self: flex-end;";case"BL":return"align-self: flex-end; justify-self: flex-start;";case"BC":return"align-self: flex-end; justify-self: center;";case"BR":return"align-self: flex-end; justify-self: flex-end;";default:return""}});return y(s,()=>{if(!s.value&&i.value){const r=o.indexOf(e.value);r<5?e.value=o[r+1]:e.value=o[0]}}),{args:a,buttonPos:e,autoRotatePos:i,buttonStyle:m,value:s}},template:`
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
            >
            {{value}}
                <template #button="{extractEl}">
                    <lib-button :style="buttonStyle" @click="value = !value" v-extract-root-el="extractEl">Toggle Popup</lib-button>
                </template>
                <template #popup="{position, extractEl}">
                    <lib-debug v-extract-root-el="extractEl" :style="args.width ? 'width: ${a.width};' : ''" class="bg-bg dark:bg-fg">
                        {{ position }}
                    </lib-debug>
                </template>
            </lib-popup>
            </div>
            `})},n={...t,args:{...t,width:"110vw"}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components,
    directives: {
      extractRootEl
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,d,b,g,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary,
    width: "110vw"
  }
}`,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source},description:{story:"When the popup is too wide, it's positioned to the left and overflow scroll is set with an invisible scrollbar.",...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};const j=["Primary","PopupTooBig"];export{n as PopupTooBig,t as Primary,j as __namedExportsOrder,L as default};
//# sourceMappingURL=LibPopup.stories-3b62364b.js.map
