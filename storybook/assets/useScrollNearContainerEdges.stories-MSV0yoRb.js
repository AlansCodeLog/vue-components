import{a as q,r as M,o as z}from"./vue.esm-bundler-DwcccCfS.js";import{t as F}from"./twMerge-Lr_-a9Kp.js";const G=({containerEl:v,scrollMargin:d=10,outerScrollMargin:h,fastPixelMultiplier:s=4,fastPixelAmount:p,useTimer:E=!0,timerInterval:L=1})=>{s=p!==void 0?p*2:s;const t=q({left:!1,right:!1,down:!1,up:!1}),f=M(!1),u=()=>{t.right=!1,t.left=!1,t.up=!1,t.down=!1,f.value=!1};let x;const a=(r,n)=>{const e=v.value;if(!e)return;const c=e.scrollLeft,g=e.scrollTop;e.scroll(c+r,g+n)},o={x:0,y:0},C=()=>{o.x=0,o.y=0},l=d,m=h??0,R=(r,n)=>{const e=v.value;if(!e)return;const c=e.getBoundingClientRect(),g=c.x,w=c.x+c.width,I=c.y,y=c.y+c.height,$=g-m,X=g+l,Y=w-m,H=w+l,N=I-m,W=I+l,j=y-l,k=y+m,S=l+m;if(u(),C(),r>$&&r<X){if(e.scrollLeft>0){const i=(g+l-r)/S;o.x=-i*s}}else if(r>Y&&r<H&&e.scrollWidth-e.scrollLeft-Math.round(c.width)>0){const i=(r-(w-l))/S;o.x=i*s}if(n>N&&n<W){if(e.scrollTop>0){const i=(I+l-n)/S;o.y=-i*s}}else if(n>j&&n<k&&e.scrollHeight-e.scrollTop-Math.round(c.height)>0){const i=(n-(y-l))/S;o.y=i*s}(o.x!==0||o.y!==0)&&(f.value=!0,t.right=o.x>0,t.left=o.x<0,t.up=o.y<0,t.down=o.y>0,a(o.x,o.y))},B=()=>{clearInterval(x)};return{scrollEdges:(r,n,e)=>{clearInterval(x),R(r,n),(e||E)&&(x=setInterval(()=>{R(r,n)},L))},scrollIndicator:t,resetScrollIndicator:u,clearScrollInterval:B,isScrolling:f,endScroll:()=>{B(),u(),C()}}},Z={},b={render:v=>({setup:()=>{const d=M(null),{resetScrollIndicator:h,scrollEdges:s,endScroll:p,scrollIndicator:E,isScrolling:L}=G({containerEl:d,scrollMargin:20,outerScrollMargin:20}),t=M({x:0,y:0});z(()=>{t.value.x=d.value.getBoundingClientRect().left,t.value.y=d.value.getBoundingClientRect().top});const f=a=>{t.value.x=a.clientX,t.value.y=a.clientY,s(a.clientX,a.clientY)},u=a=>{p(),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",u)};return{args:v,containerEl:d,resetScrollIndicator:h,scrollEdges:s,endScroll:p,startDrag:a=>{document.addEventListener("mousemove",f),document.addEventListener("mouseup",u)},scrollIndicator:E,isScrolling:L,twMerge:F,pos:t}},template:`
        <div 
            :class="twMerge(
                'relative flex flex-col max-h-[300px] max-w-[300px] border-2 border-red-500',
                isScrolling && 'after:content-[\\'\\'] after:absolute after:inset-0 after:border-transparent after:border-[15px]', 
                scrollIndicator.right && 'after:border-r-accent-500/60',
                scrollIndicator.down && 'after:border-b-accent-500/60',
                scrollIndicator.left && 'after:border-l-accent-500/60',
                scrollIndicator.up && 'after:border-t-accent-500/60',
            )"
            
        >
            <div 
                class="overflow-auto"
                ref="containerEl"
            >
                <div class="h-[1000px] w-[1000px]"/>
                <div
                    @mousedown="startDrag" 
                    :style="\`top:\${pos.y}px; left:\${pos.x}px;\`"
                    class="h-[20px] w-[20px] bg-red-500 cursor-move fixed"
                ></div>
            </div>
        </div>
        `})};var _,O,T;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    setup: () => {
      const containerEl = ref<HTMLElement | null>(null);
      const {
        resetScrollIndicator,
        scrollEdges,
        endScroll,
        scrollIndicator,
        isScrolling
      } = useScrollNearContainerEdges({
        containerEl,
        scrollMargin: 20,
        outerScrollMargin: 20
      });
      const pos = ref({
        x: 0,
        y: 0
      });
      onMounted(() => {
        pos.value.x = containerEl.value!.getBoundingClientRect().left;
        pos.value.y = containerEl.value!.getBoundingClientRect().top;
      });
      const moveDrag = (e: MouseEvent): void => {
        pos.value.x = e.clientX;
        pos.value.y = e.clientY;
        scrollEdges(e.clientX, e.clientY);
      };
      const endDrag = (_e: MouseEvent): void => {
        endScroll();
        document.removeEventListener("mousemove", moveDrag);
        document.removeEventListener("mouseup", endDrag);
      };
      const startDrag = (_e: MouseEvent): void => {
        document.addEventListener("mousemove", moveDrag);
        document.addEventListener("mouseup", endDrag);
      };
      return {
        args,
        containerEl,
        resetScrollIndicator,
        scrollEdges,
        endScroll,
        startDrag,
        scrollIndicator,
        isScrolling,
        twMerge,
        pos
      };
    },
    template: \`
        <div 
            :class="twMerge(
                'relative flex flex-col max-h-[300px] max-w-[300px] border-2 border-red-500',
                isScrolling && 'after:content-[\\\\'\\\\'] after:absolute after:inset-0 after:border-transparent after:border-[15px]', 
                scrollIndicator.right && 'after:border-r-accent-500/60',
                scrollIndicator.down && 'after:border-b-accent-500/60',
                scrollIndicator.left && 'after:border-l-accent-500/60',
                scrollIndicator.up && 'after:border-t-accent-500/60',
            )"
            
        >
            <div 
                class="overflow-auto"
                ref="containerEl"
            >
                <div class="h-[1000px] w-[1000px]"/>
                <div
                    @mousedown="startDrag" 
                    :style="\\\`top:\\\${pos.y}px; left:\\\${pos.x}px;\\\`"
                    class="h-[20px] w-[20px] bg-red-500 cursor-move fixed"
                ></div>
            </div>
        </div>
        \`
  })
}`,...(T=(O=b.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const A=["Primary"];export{b as Primary,A as __namedExportsOrder,Z as default};
