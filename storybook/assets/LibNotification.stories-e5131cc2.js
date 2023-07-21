import{j as T,c as W,N as j}from"./index-16470db9.js";import"./vue.esm-bundler-73ebc217.js";import"./extractRootEl-447eb833.js";const r=new j,F={component:T,args:{}},n={render:U=>({components:{...W,LibNotification:T},setup(){return{handler:r,args:U}},backgrounds:{disable:!0},template:`
            <lib-notification :handler="handler" :v-bind="args"/>
        `}),args:{notification:{...r._createEntry({title:"Notification",message:"This is a notification. Pick an option:"}),resolve:()=>{}}}},a={...n,args:{...n.args,notification:r._createEntry({...n.args.notification,code:"0001"})}},o={...n,args:{...n.args,notification:r._createEntry({...n.args.notification,requiresAction:!0})}},t={...n,args:{...n.args,notification:r._createEntry({...n.args.notification,options:["Ok"],cancellable:!1})}},e={...n,args:{...n.args,notification:r._createEntry({...n.args.notification,options:["Ok","Default Answer","Cancel"]})}},i={...n,args:{...n.args,notification:r._createEntry({...e.args.notification,default:"Default Answer"})}},s={...n,args:{...n.args,notification:r._createEntry({...e.args.notification,options:["Ok","Dangerous Option","Cancel"],dangerous:["Dangerous Option"]})}},c={...n,args:{...n.args,notification:r._createEntry({...e.args.notification,options:["Ok","Default Answer","Dangerous Option","Cancel"],default:"Default Answer",dangerous:["Dangerous Option"]})}};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ...components,
      LibNotification
    },
    setup() {
      return {
        handler,
        args
      };
    },
    backgrounds: {
      disable: true
    },
    template: \`
            <lib-notification :handler="handler" :v-bind="args"/>
        \`
  }),
  args: {
    // @ts-expect-error calling protected method
    notification: {
      ...handler._createEntry({
        title: \`Notification\`,
        message: \`This is a notification. Pick an option:\`
      }),
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      resolve: () => {}
    }
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...Primary.args!.notification,
      code: "0001"
    })
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...Primary.args!.notification,
      requiresAction: true
    })
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var O,D,P,_,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...Primary.args!.notification,
      options: ["Ok"],
      cancellable: false
    })
  }
}`,...(P=(D=t.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Should not have cancel cross in top corner.",...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var E,b,A;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...Primary.args!.notification,
      options: ["Ok", "Default Answer", "Cancel"]
    })
  }
}`,...(A=(b=e.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var k,x,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...CustomOptions.args!.notification,
      default: "Default Answer"
    })
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,N,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...CustomOptions.args!.notification,
      options: ["Ok", "Dangerous Option", "Cancel"],
      dangerous: ["Dangerous Option"]
    })
  }
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var q,L,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    // @ts-expect-error calling protected method
    notification: handler._createEntry({
      ...CustomOptions.args!.notification,
      options: ["Ok", "Default Answer", "Dangerous Option", "Cancel"],
      default: "Default Answer",
      dangerous: ["Dangerous Option"]
    })
  }
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const G=["Primary","WithCode","RequiresAction","Uncancellable","CustomOptions","CustomDefaultOption","CustomDangerousOption","CustomDefaultAndDangerousOption"];export{s as CustomDangerousOption,c as CustomDefaultAndDangerousOption,i as CustomDefaultOption,e as CustomOptions,n as Primary,o as RequiresAction,t as Uncancellable,a as WithCode,G as __namedExportsOrder,F as default};
//# sourceMappingURL=LibNotification.stories-e5131cc2.js.map
