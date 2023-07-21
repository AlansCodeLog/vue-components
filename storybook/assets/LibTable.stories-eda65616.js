import{a as M,c as d}from"./index-16470db9.js";import"./vue.esm-bundler-73ebc217.js";import"./extractRootEl-447eb833.js";const X={component:M},r={render:e=>({components:d,setup:()=>({args:e}),template:`
            <test-wrapper :outline="args.outline">
                <div class="overflow-x-scroll scrollbar-hidden">
                    <lib-table
                        v-bind="args"
                    >
                    </lib-table>
                </div>
            </test-wrapper>
        `}),args:{cols:["prop1","prop2","prop3"],values:[{prop1:"Item1 Prop 1",prop2:"Item1 Prop 2",prop3:"Item1 Prop 3"},{prop1:"Item2 Prop 1",prop2:"Item2 Prop 2",prop3:"Item2 Prop 3"},{prop1:"Item3 Prop 1",prop2:"Item3 Prop 2",prop3:"Item3 Prop 3"}],colInfo:{prop1:{name:"Header 1"},prop2:{name:"Header 2"}}}},o={...r,args:{...r.args,cellBorder:!1}},a={...r,args:{...r.args,border:!1}},n={...r,args:{...r.args,cellBorder:!1,border:!1}},s={...r,args:{...r.args,rounded:!1}},p={...r,args:{...r.args,header:!1}},l={...r,args:{...r.args,header:!1,border:!1}},t={...r,args:{...r.args,header:!1,cellBorder:!1}},i={...r,args:{...r.args,resizable:{fitWidth:!1}}},c={render:e=>({components:d,setup:()=>({args:e}),template:`
            <test-wrapper :outline="args.outline">
                <lib-table
                    v-bind="args"
                >
                </lib-table>
                <br>
                <lib-table
                v-bind="{...args, colInfo:args.colInfo2}"
                >
            </lib-table>
            <br>
                <lib-table
                    v-bind="{...args, colInfo:args.colInfo3}"
                >
                </lib-table>
            </test-wrapper>
        `}),args:{cols:["prop1","prop2","prop3"],values:[{prop1:"Prop 1",prop2:"Prop 2",prop3:"Prop 3"}],colInfo:{prop1:{name:"No Resize",resizable:!1}},colInfo2:{prop2:{name:"No Resize",resizable:!1}},colInfo3:{prop3:{name:"No Resize",resizable:!1}}}},m={render:e=>({components:d,setup:()=>({args:e}),template:`
            <test-wrapper :outline="args.outline">
                <lib-table
                    v-bind="args"
                >
                </lib-table>
                <br>
                <lib-table
                v-bind="{...args, colInfo:args.colInfo2}"
                >
            </lib-table>
            <br>
                <lib-table
                    v-bind="{...args, colInfo:args.colInfo3}"
                >
                </lib-table>
            </test-wrapper>
        `}),args:{cols:["prop1","prop2","prop3","prop4"],values:[{prop1:"Prop 1",prop2:"Prop 2",prop3:"Prop 3",prop4:"Prop 4"}],colInfo:{prop1:{name:"No Resize",resizable:!1},prop3:{name:"No Resize",resizable:!1}},colInfo2:{prop2:{name:"No Resize",resizable:!1},prop3:{name:"No Resize",resizable:!1}},colInfo3:{prop1:{name:"No Resize",resizable:!1},prop4:{name:"No Resize",resizable:!1}}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <test-wrapper :outline="args.outline">
                <div class="overflow-x-scroll scrollbar-hidden">
                    <lib-table
                        v-bind="args"
                    >
                    </lib-table>
                </div>
            </test-wrapper>
        \`
  }),
  args: {
    cols: ["prop1", "prop2", "prop3"],
    values: [{
      prop1: "Item1 Prop 1",
      prop2: "Item1 Prop 2",
      prop3: "Item1 Prop 3"
    }, {
      prop1: "Item2 Prop 1",
      prop2: "Item2 Prop 2",
      prop3: "Item2 Prop 3"
    }, {
      prop1: "Item3 Prop 1",
      prop2: "Item3 Prop 2",
      prop3: "Item3 Prop 3"
    }],
    colInfo: {
      prop1: {
        name: "Header 1"
      },
      prop2: {
        name: "Header 2"
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,P,I;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    cellBorder: false
  }
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var z,N,v;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    border: false
  }
}`,...(v=(N=a.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var R,y,B;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    cellBorder: false,
    border: false
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var S,h,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    rounded: false
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var C,H,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    header: false
  }
}`,...(F=(H=p.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var x,W,_;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    header: false,
    border: false
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,T,E;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    header: false,
    cellBorder: false
  }
}`,...(E=(T=t.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,j,k;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    resizable: {
      fitWidth: false
    }
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,D,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <test-wrapper :outline="args.outline">
                <lib-table
                    v-bind="args"
                >
                </lib-table>
                <br>
                <lib-table
                v-bind="{...args, colInfo:args.colInfo2}"
                >
            </lib-table>
            <br>
                <lib-table
                    v-bind="{...args, colInfo:args.colInfo3}"
                >
                </lib-table>
            </test-wrapper>
        \`
  }),
  args: ({
    cols: ["prop1", "prop2", "prop3"],
    values: [{
      prop1: "Prop 1",
      prop2: "Prop 2",
      prop3: "Prop 3"
    }],
    colInfo: {
      prop1: {
        name: "No Resize",
        resizable: false
      }
    },
    colInfo2: {
      prop2: {
        name: "No Resize",
        resizable: false
      }
    },
    colInfo3: {
      prop3: {
        name: "No Resize",
        resizable: false
      }
    }
  } as any)
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <test-wrapper :outline="args.outline">
                <lib-table
                    v-bind="args"
                >
                </lib-table>
                <br>
                <lib-table
                v-bind="{...args, colInfo:args.colInfo2}"
                >
            </lib-table>
            <br>
                <lib-table
                    v-bind="{...args, colInfo:args.colInfo3}"
                >
                </lib-table>
            </test-wrapper>
        \`
  }),
  args: ({
    cols: ["prop1", "prop2", "prop3", "prop4"],
    values: [{
      prop1: "Prop 1",
      prop2: "Prop 2",
      prop3: "Prop 3",
      prop4: "Prop 4"
    }],
    colInfo: {
      prop1: {
        name: "No Resize",
        resizable: false
      },
      prop3: {
        name: "No Resize",
        resizable: false
      }
    },
    colInfo2: {
      prop2: {
        name: "No Resize",
        resizable: false
      },
      prop3: {
        name: "No Resize",
        resizable: false
      }
    },
    colInfo3: {
      prop1: {
        name: "No Resize",
        resizable: false
      },
      prop4: {
        name: "No Resize",
        resizable: false
      }
    }
  } as any)
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Y=["Primary","NoCellBorders","NoBorders","NoCellBordersNoBorders","SquareBorders","NoHeader","NoHeaderNoBorders","NoHeaderNoCellBorders","FitWidthFalse","ThreeColSomeColsNotResizable","FourColSomeColsNotResizable"];export{i as FitWidthFalse,m as FourColSomeColsNotResizable,a as NoBorders,o as NoCellBorders,n as NoCellBordersNoBorders,p as NoHeader,l as NoHeaderNoBorders,t as NoHeaderNoCellBorders,r as Primary,s as SquareBorders,c as ThreeColSomeColsNotResizable,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=LibTable.stories-eda65616.js.map
