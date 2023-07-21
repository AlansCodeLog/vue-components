import{d as r,r as a}from"./vue.esm-bundler-73ebc217.js";import{i as f,c as b,N as d}from"./index-16470db9.js";import"./extractRootEl-447eb833.js";const v={component:f,args:{}},i={render:c=>({components:b,setup(){const t=r(new d);let n=0;const e=a(!0),o=a(!1);return{notifyRequiresAction:()=>{n++,t.notify({title:e.value?`Notification(${n})`:void 0,message:"This is a notification that requires action. Pick an option:",requiresAction:!0,options:["Ok","Default Answer","Cancel"],default:"Default Answer"})},notifyTimeoutable:()=>{n++,t.notify({title:e.value?`Notification(${n})`:void 0,message:"This is a notification. No action required.",timeout:o.value?!1:2e3})},notifyNonCancellable:()=>{n++,t.notify({title:e.value?`Notification(${n})`:void 0,message:"This is a non-cancellable notification. Pick an option:",options:["Ok","Default Answer"],default:"Default Answer",cancellable:!1})},notifyWithDangerousOption:()=>{n++,t.notify({title:e.value?`Notification(${n})`:void 0,message:"This is a notification that has a dangerous option. Pick an option:",options:["Ok","Default Answer","Dangerous Option","Cancel"],default:"Default Answer",dangerous:["Dangerous Option"]})},notifyNonCancellableRequiresAction:()=>{n++,t.notify({title:e.value?`Notification(${n})`:void 0,message:"This is a non-cancellable notification. Pick an option:",requiresAction:!0,options:["Ok","Default Answer"],default:"Default Answer",cancellable:!1})},handler:t,withTitle:e,disableTimeout:o,args:{outline:!1,...c}}},backgrounds:{disable:!0},template:`
    <test-wrapper :outline="args.outline">
        <lib-button :label="'Notify Timeoutable'" @click="notifyTimeoutable()"></lib-button>
        <lib-button :label="'Notify RequiresAction'" @click="notifyRequiresAction()"></lib-button>
        <lib-button :label="'Notify Non-Cancellable that RequiresAction'" @click="notifyNonCancellableRequiresAction()"></lib-button>
        <lib-button :label="'Notify With Dangerous Option'" @click="notifyWithDangerousOption()"></lib-button>
        <lib-button :label="'Notify Non-Cancellable'" @click="notifyNonCancellable()"></lib-button>
        <input type="checkbox" v-model="withTitle"/> With Title
        <input type="checkbox" v-model="disableTimeout"/> Disable Timeout
            <lib-notifications :handler="handler" />
        History:
        <lib-debug>
            <template v-for="entry in handler.history">
                Message: {{entry.message}}
                Resolution: {{entry.resolution}}
                <br>
            </template>
        </lib-debug>
    </test-wrapper>
    `})};var l,s,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup() {
      const handler = reactive(new NotificationHandler());
      let count = 0;
      const withTitle = ref(true);
      const disableTimeout = ref(false);
      const notifyRequiresAction = () => {
        count++;
        void handler.notify({
          title: withTitle.value ? \`Notification(\${count})\` : undefined,
          message: \`This is a notification that requires action. Pick an option:\`,
          requiresAction: true,
          options: ["Ok", "Default Answer", "Cancel"],
          default: "Default Answer"
        });
      };
      const notifyWithDangerousOption = () => {
        count++;
        void handler.notify({
          title: withTitle.value ? \`Notification(\${count})\` : undefined,
          message: \`This is a notification that has a dangerous option. Pick an option:\`,
          options: ["Ok", "Default Answer", "Dangerous Option", "Cancel"],
          default: "Default Answer",
          dangerous: ["Dangerous Option"]
        });
      };
      const notifyNonCancellable = () => {
        count++;
        void handler.notify({
          title: withTitle.value ? \`Notification(\${count})\` : undefined,
          message: \`This is a non-cancellable notification. Pick an option:\`,
          options: ["Ok", "Default Answer"],
          default: "Default Answer",
          cancellable: false
        });
      };
      const notifyNonCancellableRequiresAction = () => {
        count++;
        void handler.notify({
          title: withTitle.value ? \`Notification(\${count})\` : undefined,
          message: \`This is a non-cancellable notification. Pick an option:\`,
          requiresAction: true,
          options: ["Ok", "Default Answer"],
          default: "Default Answer",
          cancellable: false
        });
      };
      const notifyTimeoutable = () => {
        count++;
        void handler.notify({
          title: withTitle.value ? \`Notification(\${count})\` : undefined,
          message: \`This is a notification. No action required.\`,
          timeout: disableTimeout.value ? false : 2000
        });
      };
      return {
        notifyRequiresAction,
        notifyTimeoutable,
        notifyNonCancellable,
        notifyWithDangerousOption,
        notifyNonCancellableRequiresAction,
        handler,
        withTitle,
        disableTimeout,
        args: {
          outline: false,
          ...args
        }
      };
    },
    backgrounds: {
      disable: true
    },
    // <lib-debug>{{args.handler}}</lib-debug>
    template: \`
    <test-wrapper :outline="args.outline">
        <lib-button :label="'Notify Timeoutable'" @click="notifyTimeoutable()"></lib-button>
        <lib-button :label="'Notify RequiresAction'" @click="notifyRequiresAction()"></lib-button>
        <lib-button :label="'Notify Non-Cancellable that RequiresAction'" @click="notifyNonCancellableRequiresAction()"></lib-button>
        <lib-button :label="'Notify With Dangerous Option'" @click="notifyWithDangerousOption()"></lib-button>
        <lib-button :label="'Notify Non-Cancellable'" @click="notifyNonCancellable()"></lib-button>
        <input type="checkbox" v-model="withTitle"/> With Title
        <input type="checkbox" v-model="disableTimeout"/> Disable Timeout
            <lib-notifications :handler="handler" />
        History:
        <lib-debug>
            <template v-for="entry in handler.history">
                Message: {{entry.message}}
                Resolution: {{entry.resolution}}
                <br>
            </template>
        </lib-debug>
    </test-wrapper>
    \`
  })
}`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const k=["Primary"];export{i as Primary,k as __namedExportsOrder,v as default};
//# sourceMappingURL=LibNotifications.stories-e8789bdc.js.map
