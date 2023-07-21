function st(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?st(Object(e),!0).forEach(function(a){E(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):st(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}function An(n){"@babel/helpers - typeof";return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(n)}function fe(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function ft(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function le(n,t,e){return t&&ft(n.prototype,t),e&&ft(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function E(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Gn(n,t){return ue(n)||de(n,t)||Lt(n,t)||ge()}function ln(n){return ce(n)||me(n)||Lt(n)||ve()}function ce(n){if(Array.isArray(n))return Rn(n)}function ue(n){if(Array.isArray(n))return n}function me(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function de(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,f;try{for(e=e.call(n);!(r=(o=e.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(s){i=!0,f=s}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return a}}function Lt(n,t){if(n){if(typeof n=="string")return Rn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Rn(n,t)}}function Rn(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lt=function(){},Bn={},Rt={},Ft=null,zt={mark:lt,measure:lt};try{typeof window<"u"&&(Bn=window),typeof document<"u"&&(Rt=document),typeof MutationObserver<"u"&&(Ft=MutationObserver),typeof performance<"u"&&(zt=performance)}catch{}var be=Bn.navigator||{},ct=be.userAgent,ut=ct===void 0?"":ct,Y=Bn,y=Rt,mt=Ft,mn=zt;Y.document;var D=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Dt=~ut.indexOf("MSIE")||~ut.indexOf("Trident/"),dn,vn,gn,bn,pn,R="___FONT_AWESOME___",Fn=16,jt="fa",Yt="svg-inline--fa",G="data-fa-i2svg",zn="data-fa-pseudo-element",pe="data-fa-pseudo-element-pending",Vn="data-prefix",Kn="data-icon",dt="fontawesome-i2svg",he="async",ye=["HTML","HEAD","STYLE","SCRIPT"],$t=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",qn=[h,x];function cn(n){return new Proxy(n,{get:function(e,a){return a in e?e[a]:e[h]}})}var an=cn((dn={},E(dn,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),E(dn,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),dn)),rn=cn((vn={},E(vn,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(vn,x,{solid:"fass",regular:"fasr",light:"fasl"}),vn)),on=cn((gn={},E(gn,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(gn,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),gn)),ke=cn((bn={},E(bn,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(bn,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bn)),we=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ut="fa-layers-text",xe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ae=cn((pn={},E(pn,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(pn,x,{900:"fass",400:"fasr",300:"fasl"}),pn)),Wt=[1,2,3,4,5,6,7,8,9,10],Ee=Wt.concat([11,12,13,14,15,16,17,18,19,20]),Se=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(rn[h]).map(sn.add.bind(sn));Object.keys(rn[x]).map(sn.add.bind(sn));var Oe=[].concat(qn,ln(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Wt.map(function(n){return"".concat(n,"x")})).concat(Ee.map(function(n){return"w-".concat(n)})),tn=Y.FontAwesomeConfig||{};function Pe(n){var t=y.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function _e(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(y&&typeof y.querySelector=="function"){var Ce=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ce.forEach(function(n){var t=Gn(n,2),e=t[0],a=t[1],r=_e(Pe(e));r!=null&&(tn[a]=r)})}var Ht={styleDefault:"solid",familyDefault:"classic",cssPrefix:jt,replacementClass:Yt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var J=u(u({},Ht),tn);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(Ht).forEach(function(n){Object.defineProperty(d,n,{enumerable:!0,set:function(e){J[n]=e,en.forEach(function(a){return a(d)})},get:function(){return J[n]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,en.forEach(function(e){return e(d)})},get:function(){return J.cssPrefix}});Y.FontAwesomeConfig=d;var en=[];function Ie(n){return en.push(n),function(){en.splice(en.indexOf(n),1)}}var j=Fn,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ne(n){if(!(!n||!D)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),n}}var Te="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var n=12,t="";n-- >0;)t+=Te[Math.random()*62|0];return t}function Z(n){for(var t=[],e=(n||[]).length>>>0;e--;)t[e]=n[e];return t}function Qn(n){return n.classList?Z(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Me(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Xt(n[e]),'" ')},"").trim()}function Pn(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e].trim(),";")},"")}function Jn(n){return n.size!==L.size||n.x!==L.x||n.y!==L.y||n.rotate!==L.rotate||n.flipX||n.flipY}function Le(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(f)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:c}}function Re(n){var t=n.transform,e=n.width,a=e===void 0?Fn:e,r=n.height,i=r===void 0?Fn:r,o=n.startCentered,f=o===void 0?!1:o,s="";return f&&Dt?s+="translate(".concat(t.x/j-a/2,"em, ").concat(t.y/j-i/2,"em) "):f?s+="translate(calc(-50% + ".concat(t.x/j,"em), calc(-50% + ").concat(t.y/j,"em)) "):s+="translate(".concat(t.x/j,"em, ").concat(t.y/j,"em) "),s+="scale(".concat(t.size/j*(t.flipX?-1:1),", ").concat(t.size/j*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Fe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Gt(){var n=jt,t=Yt,e=d.cssPrefix,a=d.replacementClass,r=Fe;if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(f,".".concat(a))}return r}var vt=!1;function Nn(){d.autoAddCss&&!vt&&(Ne(Gt()),vt=!0)}var ze={mixout:function(){return{dom:{css:Gt,insertCss:Nn}}},hooks:function(){return{beforeDOMElementCreation:function(){Nn()},beforeI2svg:function(){Nn()}}}},F=Y||{};F[R]||(F[R]={});F[R].styles||(F[R].styles={});F[R].hooks||(F[R].hooks={});F[R].shims||(F[R].shims=[]);var T=F[R],Bt=[],De=function n(){y.removeEventListener("DOMContentLoaded",n),En=1,Bt.map(function(t){return t()})},En=!1;D&&(En=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),En||y.addEventListener("DOMContentLoaded",De));function je(n){D&&(En?setTimeout(n,0):Bt.push(n))}function un(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Xt(n):"<".concat(t," ").concat(Me(a),">").concat(i.map(un).join(""),"</").concat(t,">")}function gt(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}var Ye=function(t,e){return function(a,r,i,o){return t.call(e,a,r,i,o)}},Tn=function(t,e,a,r){var i=Object.keys(t),o=i.length,f=r!==void 0?Ye(e,r):e,s,c,l;for(a===void 0?(s=1,l=t[i[0]]):(s=0,l=a);s<o;s++)c=i[s],l=f(l,t[c],c,t);return l};function $e(n){for(var t=[],e=0,a=n.length;e<a;){var r=n.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=n.charCodeAt(e++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),e--)}else t.push(r)}return t}function Dn(n){var t=$e(n);return t.length===1?t[0].toString(16):null}function Ue(n,t){var e=n.length,a=n.charCodeAt(t),r;return a>=55296&&a<=56319&&e>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function bt(n){return Object.keys(n).reduce(function(t,e){var a=n[e],r=!!a.icon;return r?t[a.iconName]=a.icon:t[e]=a,t},{})}function jn(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=bt(t);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(n,bt(t)):T.styles[n]=u(u({},T.styles[n]||{}),i),n==="fas"&&jn("fa",t)}var hn,yn,kn,V=T.styles,We=T.shims,He=(hn={},E(hn,h,Object.values(on[h])),E(hn,x,Object.values(on[x])),hn),Zn=null,Vt={},Kt={},qt={},Qt={},Jt={},Xe=(yn={},E(yn,h,Object.keys(an[h])),E(yn,x,Object.keys(an[x])),yn);function Ge(n){return~Oe.indexOf(n)}function Be(n,t){var e=t.split("-"),a=e[0],r=e.slice(1).join("-");return a===n&&r!==""&&!Ge(r)?r:null}var Zt=function(){var t=function(i){return Tn(V,function(o,f,s){return o[s]=Tn(f,i,{}),o},{})};Vt=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var f=i[2].filter(function(s){return typeof s=="number"});f.forEach(function(s){r[s.toString(16)]=o})}return r}),Kt=t(function(r,i,o){if(r[o]=o,i[2]){var f=i[2].filter(function(s){return typeof s=="string"});f.forEach(function(s){r[s]=o})}return r}),Jt=t(function(r,i,o){var f=i[2];return r[o]=o,f.forEach(function(s){r[s]=o}),r});var e="far"in V||d.autoFetchSvg,a=Tn(We,function(r,i){var o=i[0],f=i[1],s=i[2];return f==="far"&&!e&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:s}),r},{names:{},unicodes:{}});qt=a.names,Qt=a.unicodes,Zn=_n(d.styleDefault,{family:d.familyDefault})};Ie(function(n){Zn=_n(n.styleDefault,{family:d.familyDefault})});Zt();function nt(n,t){return(Vt[n]||{})[t]}function Ve(n,t){return(Kt[n]||{})[t]}function X(n,t){return(Jt[n]||{})[t]}function ne(n){return qt[n]||{prefix:null,iconName:null}}function Ke(n){var t=Qt[n],e=nt("fas",n);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function $(){return Zn}var tt=function(){return{prefix:null,iconName:null,rest:[]}};function _n(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.family,a=e===void 0?h:e,r=an[a][n],i=rn[a][n]||rn[a][r],o=n in T.styles?n:null;return i||o||null}var pt=(kn={},E(kn,h,Object.keys(on[h])),E(kn,x,Object.keys(on[x])),kn);function Cn(n){var t,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(t={},E(t,h,"".concat(d.cssPrefix,"-").concat(h)),E(t,x,"".concat(d.cssPrefix,"-").concat(x)),t),o=null,f=h;(n.includes(i[h])||n.some(function(c){return pt[h].includes(c)}))&&(f=h),(n.includes(i[x])||n.some(function(c){return pt[x].includes(c)}))&&(f=x);var s=n.reduce(function(c,l){var m=Be(d.cssPrefix,l);if(V[l]?(l=He[f].includes(l)?ke[f][l]:l,o=l,c.prefix=l):Xe[f].indexOf(l)>-1?(o=l,c.prefix=_n(l,{family:f})):m?c.iconName=m:l!==d.replacementClass&&l!==i[h]&&l!==i[x]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?ne(c.iconName):{},v=X(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||v||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!V.far&&V.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},tt());return(n.includes("fa-brands")||n.includes("fab"))&&(s.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(s.prefix="fad"),!s.prefix&&f===x&&(V.fass||d.autoFetchSvg)&&(s.prefix="fass",s.iconName=X(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=$()||"fas"),s}var qe=function(){function n(){fe(this,n),this.definitions={}}return le(n,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){e.definitions[f]=u(u({},e.definitions[f]||{}),o[f]),jn(f,o[f]);var s=on[h][f];s&&jn(s,o[f]),Zt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,s=o.iconName,c=o.icon,l=c[2];e[f]||(e[f]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[f][m]=c)}),e[f][s]=c}),e}}]),n}(),ht=[],K={},q={},Qe=Object.keys(q);function Je(n,t){var e=t.mixoutsTo;return ht=n,K={},Object.keys(q).forEach(function(a){Qe.indexOf(a)===-1&&delete q[a]}),ht.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),An(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){e[o]||(e[o]={}),e[o][f]=r[o][f]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(q)}),e}function Yn(n,t){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=K[n]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function B(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var r=K[n]||[];r.forEach(function(i){i.apply(null,e)})}function z(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[n]?q[n].apply(null,t):void 0}function $n(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,e=n.prefix||$();if(t)return t=X(e,t)||t,gt(te.definitions,e,t)||gt(T.styles,e,t)}var te=new qe,Ze=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,B("noAuto")},na={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(B("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,je(function(){ea({autoReplaceSvgRoot:e}),B("watch",t)})}},ta={icon:function(t){if(t===null)return null;if(An(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=_n(t[0]);return{prefix:a,iconName:X(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(we))){var r=Cn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=$();return{prefix:i,iconName:X(i,t)||t}}}},I={noAuto:Ze,config:d,dom:na,parse:ta,library:te,findIconDefinition:$n,toHtml:un},ea=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function In(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return un(a)})}}),Object.defineProperty(n,"node",{get:function(){if(D){var a=y.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function aa(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(Jn(o)&&e.found&&!a.found){var f=e.width,s=e.height,c={x:f/s/2,y:.5};r.style=Pn(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ra(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function et(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,f=n.symbol,s=n.title,c=n.maskId,l=n.titleId,m=n.extra,g=n.watchable,v=g===void 0?!1:g,k=a.found?a:e,A=k.width,S=k.height,O=r==="fak",b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(C){return m.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(m.classes).join(" "),w={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(S)})},P=O&&!~m.classes.indexOf("fa-fw")?{width:"".concat(A/S*16*.0625,"em")}:{};v&&(w.attributes[G]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||fn())},children:[s]}),delete w.attributes.title);var _=u(u({},w),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:f,styles:u(u({},P),m.styles)}),p=a.found&&e.found?z("generateAbstractMask",_)||{children:[],attributes:{}}:z("generateAbstractIcon",_)||{children:[],attributes:{}},N=p.children,M=p.attributes;return _.children=N,_.attributes=M,f?ra(_):aa(_)}function yt(n){var t=n.content,e=n.width,a=n.height,r=n.transform,i=n.title,o=n.extra,f=n.watchable,s=f===void 0?!1:f,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[G]="");var l=u({},o.styles);Jn(r)&&(l.transform=Re({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Pn(l);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function ia(n){var t=n.content,e=n.title,a=n.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Pn(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Mn=T.styles;function Un(n){var t=n[0],e=n[1],a=n.slice(4),r=Gn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:e,icon:o}}var oa={found:!1,width:512,height:512};function sa(n,t){!$t&&!d.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Wn(n,t){var e=t;return t==="fa"&&d.styleDefault!==null&&(t=$()),new Promise(function(a,r){if(z("missingIconAbstract"),e==="fa"){var i=ne(n)||{};n=i.iconName||n,t=i.prefix||t}if(n&&t&&Mn[t]&&Mn[t][n]){var o=Mn[t][n];return a(Un(o))}sa(n,t),a(u(u({},oa),{},{icon:d.showMissingIcons&&n?z("missingIconAbstract")||{}:{}}))})}var kt=function(){},Hn=d.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:kt,measure:kt},nn='FA "6.4.0"',fa=function(t){return Hn.mark("".concat(nn," ").concat(t," begins")),function(){return ee(t)}},ee=function(t){Hn.mark("".concat(nn," ").concat(t," ends")),Hn.measure("".concat(nn," ").concat(t),"".concat(nn," ").concat(t," begins"),"".concat(nn," ").concat(t," ends"))},at={begin:fa,end:ee},wn=function(){};function wt(n){var t=n.getAttribute?n.getAttribute(G):null;return typeof t=="string"}function la(n){var t=n.getAttribute?n.getAttribute(Vn):null,e=n.getAttribute?n.getAttribute(Kn):null;return t&&e}function ca(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(d.replacementClass)}function ua(){if(d.autoReplaceSvg===!0)return xn.replace;var n=xn[d.autoReplaceSvg];return n||xn.replace}function ma(n){return y.createElementNS("http://www.w3.org/2000/svg",n)}function da(n){return y.createElement(n)}function ae(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,a=e===void 0?n.tag==="svg"?ma:da:e;if(typeof n=="string")return y.createTextNode(n);var r=a(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var i=n.children||[];return i.forEach(function(o){r.appendChild(ae(o,{ceFn:a}))}),r}function va(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xn={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(ae(r),e)}),e.getAttribute(G)===null&&d.keepOriginalSource){var a=y.createComment(va(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){var e=t[0],a=t[1];if(~Qn(e).indexOf(d.replacementClass))return xn.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(f,s){return s===d.replacementClass||s.match(r)?f.toSvg.push(s):f.toNode.push(s),f},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(f){return un(f)}).join(`
`);e.setAttribute(G,""),e.innerHTML=o}};function xt(n){n()}function re(n,t){var e=typeof t=="function"?t:wn;if(n.length===0)e();else{var a=xt;d.mutateApproach===he&&(a=Y.requestAnimationFrame||xt),a(function(){var r=ua(),i=at.begin("mutate");n.map(r),i(),e()})}}var rt=!1;function ie(){rt=!0}function Xn(){rt=!1}var Sn=null;function At(n){if(mt&&d.observeMutations){var t=n.treeCallback,e=t===void 0?wn:t,a=n.nodeCallback,r=a===void 0?wn:a,i=n.pseudoElementsCallback,o=i===void 0?wn:i,f=n.observeMutationsRoot,s=f===void 0?y:f;Sn=new mt(function(c){if(!rt){var l=$();Z(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wt(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wt(m.target)&&~Se.indexOf(m.attributeName))if(m.attributeName==="class"&&la(m.target)){var g=Cn(Qn(m.target)),v=g.prefix,k=g.iconName;m.target.setAttribute(Vn,v||l),k&&m.target.setAttribute(Kn,k)}else ca(m.target)&&r(m.target)})}}),D&&Sn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ga(){Sn&&Sn.disconnect()}function ba(n){var t=n.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],f=i.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),e}function pa(n){var t=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",r=Cn(Qn(n));return r.prefix||(r.prefix=$()),t&&e&&(r.prefix=t,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ve(r.prefix,n.innerText)||nt(r.prefix,Dn(n.innerText))),!r.iconName&&d.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function ha(n){var t=Z(n.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return d.autoA11y&&(e?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||fn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ya(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=pa(n),a=e.iconName,r=e.prefix,i=e.rest,o=ha(n),f=Yn("parseNodeAttributes",{},n),s=t.styleParser?ba(n):[];return u({iconName:a,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},f)}var ka=T.styles;function oe(n){var t=d.autoReplaceSvg==="nest"?Et(n,{styleParser:!1}):Et(n);return~t.extra.classes.indexOf(Ut)?z("generateLayersText",n,t):z("generateSvgReplacementMutation",n,t)}var U=new Set;qn.map(function(n){U.add("fa-".concat(n))});Object.keys(an[h]).map(U.add.bind(U));Object.keys(an[x]).map(U.add.bind(U));U=ln(U);function St(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(dt,"-").concat(m))},r=function(m){return e.remove("".concat(dt,"-").concat(m))},i=d.autoFetchSvg?U:qn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(ka));i.includes("fa")||i.push("fa");var o=[".".concat(Ut,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=Z(n.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();var s=at.begin("onTree"),c=f.reduce(function(l,m){try{var g=oe(m);g&&l.push(g)}catch(v){$t||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(g){re(g,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),s(),l()})}).catch(function(g){s(),m(g)})})}function wa(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oe(n).then(function(e){e&&re([e],t)})}function xa(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:$n(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:$n(r||{})),n(a,u(u({},e),{},{mask:r}))}}var Aa=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,f=e.mask,s=f===void 0?null:f,c=e.maskId,l=c===void 0?null:c,m=e.title,g=m===void 0?null:m,v=e.titleId,k=v===void 0?null:v,A=e.classes,S=A===void 0?[]:A,O=e.attributes,b=O===void 0?{}:O,w=e.styles,P=w===void 0?{}:w;if(t){var _=t.prefix,p=t.iconName,N=t.icon;return In(u({type:"icon"},t),function(){return B("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(g?b["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(k||fn()):(b["aria-hidden"]="true",b.focusable="false")),et({icons:{main:Un(N),mask:s?Un(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:p,transform:u(u({},L),r),symbol:o,title:g,maskId:l,titleId:k,extra:{attributes:b,styles:P,classes:S}})})}},Ea={mixout:function(){return{icon:xa(Aa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=St,e.nodeCallback=wa,e}}},provides:function(t){t.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return St(r,o)},t.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,f=a.prefix,s=a.transform,c=a.symbol,l=a.mask,m=a.maskId,g=a.extra;return new Promise(function(v,k){Promise.all([Wn(r,f),l.iconName?Wn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var S=Gn(A,2),O=S[0],b=S[1];v([e,et({icons:{main:O,mask:b},prefix:f,iconName:r,transform:s,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,f=e.styles,s=Pn(f);s.length>0&&(r.style=s);var c;return Jn(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Sa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return In({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(f){Array.isArray(f)?f.map(function(s){o=o.concat(s.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ln(i)).join(" ")},children:o}]})}}}},Oa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,f=o===void 0?[]:o,s=a.attributes,c=s===void 0?{}:s,l=a.styles,m=l===void 0?{}:l;return In({type:"counter",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:a}),ia({content:e.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ln(f))}})})}}}},Pa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,f=o===void 0?null:o,s=a.classes,c=s===void 0?[]:s,l=a.attributes,m=l===void 0?{}:l,g=a.styles,v=g===void 0?{}:g;return In({type:"text",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:a}),yt({content:e,transform:u(u({},L),i),title:f,extra:{attributes:m,styles:v,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ln(c))}})})}}},provides:function(t){t.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,f=null,s=null;if(Dt){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();f=l.width/c,s=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,yt({content:e.innerHTML,width:f,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},_a=new RegExp('"',"ug"),Ot=[1105920,1112319];function Ca(n){var t=n.replace(_a,""),e=Ue(t,0),a=e>=Ot[0]&&e<=Ot[1],r=t.length===2?t[0]===t[1]:!1;return{value:Dn(r?t[0]:t),isSecondary:a||r}}function Pt(n,t){var e="".concat(pe).concat(t.replace(":","-"));return new Promise(function(a,r){if(n.getAttribute(e)!==null)return a();var i=Z(n.children),o=i.filter(function(N){return N.getAttribute(zn)===t})[0],f=Y.getComputedStyle(n,t),s=f.getPropertyValue("font-family").match(xe),c=f.getPropertyValue("font-weight"),l=f.getPropertyValue("content");if(o&&!s)return n.removeChild(o),a();if(s&&l!=="none"&&l!==""){var m=f.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?x:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?rn[g][s[2].toLowerCase()]:Ae[g][c],k=Ca(m),A=k.value,S=k.isSecondary,O=s[0].startsWith("FontAwesome"),b=nt(v,A),w=b;if(O){var P=Ke(A);P.iconName&&P.prefix&&(b=P.iconName,v=P.prefix)}if(b&&!S&&(!o||o.getAttribute(Vn)!==v||o.getAttribute(Kn)!==w)){n.setAttribute(e,w),o&&n.removeChild(o);var _=ya(),p=_.extra;p.attributes[zn]=t,Wn(b,v).then(function(N){var M=et(u(u({},_),{},{icons:{main:N,mask:tt()},prefix:v,iconName:w,extra:p,watchable:!0})),C=y.createElement("svg");t==="::before"?n.insertBefore(C,n.firstChild):n.appendChild(C),C.outerHTML=M.map(function(W){return un(W)}).join(`
`),n.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ia(n){return Promise.all([Pt(n,"::before"),Pt(n,"::after")])}function Na(n){return n.parentNode!==document.head&&!~ye.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(zn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function _t(n){if(D)return new Promise(function(t,e){var a=Z(n.querySelectorAll("*")).filter(Na).map(Ia),r=at.begin("searchPseudoElements");ie(),Promise.all(a).then(function(){r(),Xn(),t()}).catch(function(){r(),Xn(),e()})})}var Ta={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_t,e}}},provides:function(t){t.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&_t(r)}}},Ct=!1,Ma={mixout:function(){return{dom:{unwatch:function(){ie(),Ct=!0}}}},hooks:function(){return{bootstrap:function(){At(Yn("mutationObserverCallbacks",{}))},noAuto:function(){ga()},watch:function(e){var a=e.observeMutationsRoot;Ct?Xn():At(Yn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},It=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],f=i.slice(1).join("-");if(o&&f==="h")return a.flipX=!0,a;if(o&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(o){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},e)},La={mixout:function(){return{parse:{transform:function(e){return It(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=It(r)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(s," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:f,inner:m,path:g};return{tag:"g",attributes:u({},v.outer),children:[{tag:"g",attributes:u({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),v.path)}]}]}}}},Ln={x:0,y:0,width:"100%",height:"100%"};function Nt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Ra(n){return n.tag==="g"?n.children:[n]}var Fa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Cn(r.split(" ").map(function(o){return o.trim()})):tt();return i.prefix||(i.prefix=$()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,f=e.maskId,s=e.transform,c=i.width,l=i.icon,m=o.width,g=o.icon,v=Le({transform:s,containerWidth:m,iconWidth:c}),k={tag:"rect",attributes:u(u({},Ln),{},{fill:"white"})},A=l.children?{children:l.children.map(Nt)}:{},S={tag:"g",attributes:u({},v.inner),children:[Nt(u({tag:l.tag,attributes:u(u({},l.attributes),v.path)},A))]},O={tag:"g",attributes:u({},v.outer),children:[S]},b="mask-".concat(f||fn()),w="clip-".concat(f||fn()),P={tag:"mask",attributes:u(u({},Ln),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,O]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ra(g)},P]};return a.push(_,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},Ln)}),{children:a,attributes:r}}}},za={provides:function(t){var e=!1;Y.matchMedia&&(e=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Da={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ja=[ze,Ea,Sa,Oa,Pa,Ta,Ma,La,Fa,za,Da];Je(ja,{mixoutsTo:I});I.noAuto;I.config;var Xa=I.library;I.dom;var Ga=I.parse;I.findIconDefinition;I.toHtml;var Ba=I.icon;I.layer;I.text;I.counter;const Va=Object.keys;function Ka(n){}function Ya(n="This error should never happen, please file a bug report."){throw new Error(n)}function Tt(n,t,e){switch(n){case"function":return t(e);case"number":return e[t];case"undefined":return"";default:Ya()}}function qa(n,t=0,{queue:e=!1,index:a=e?0:void 0,leading:r=!1,trailing:i=!0,promisify:o=!1}={}){const f=arguments[3]??!1;let s={};typeof e=="object"&&(s=e);const c=e?typeof a:"undefined";let l;o?l=function(...k){var A,S,O,b,w,P,_;const p=Tt(c,a,k),N=()=>{var M,C,W;if(i&&((M=s[p])!=null&&M._args)&&((C=s[p])!=null&&C.resolve)){(W=s[p])==null||W.resolve();return}delete s[p]};return s[p]??(s[p]={}),(((A=s[p])==null?void 0:A.timeout)!==void 0||!r)&&(s[p]._args=k,f?(S=s[p]).timeout??(S.timeout=setTimeout(N,t)):(O=s[p])!=null&&O.timeout&&((b=s[p])!=null&&b.reject&&((w=s[p])==null||w.reject(),(P=s[p])==null||delete P.resolve,(_=s[p])==null||delete _.reject),clearTimeout(s[p].timeout))),f||(s[p].timeout=setTimeout(N,t)),new Promise((M,C)=>{var W,it,ot;((W=s[p])==null?void 0:W.timeout)===void 0&&r&&(s[p].resolve(),(it=s[p])==null||delete it.resolve,(ot=s[p])==null||delete ot.reject,f&&(s[p].timeout=setTimeout(N,t))),s[p].resolve=M,s[p].reject=C}).then(async()=>{const M=s[p]._args;return delete s[p],n(...M)}).catch(async()=>n($a))}:l=function(...v){var k,A,S;const O=this,b=Tt(c,a,v),w=()=>{var P;i&&((P=s[b])!=null&&P._args)&&n.apply(s[b]._context,s[b]._args),delete s[b]};s[b]||(s[b]={}),((k=s[b])==null?void 0:k.timeout)===void 0&&r?(n.apply(O,v),f&&(s[b].timeout=setTimeout(w,t))):(s[b]._context=O,s[b]._args=v,f?(A=s[b]).timeout??(A.timeout=setTimeout(w,t)):(S=s[b])!=null&&S.timeout&&clearTimeout(s[b].timeout)),f||(s[b].timeout=setTimeout(w,t))};const m=(v="")=>{s[v].timeout&&clearTimeout(s[v].timeout),delete s[v]},g=(v="")=>{var k,A;i&&((k=s[v])!=null&&k._args)&&n.apply((A=s[v])==null?void 0:A._context,s[v]._args),m(v)};return l.cancel=m,l.flush=g,l}const $a=Object.freeze(new Error("Debounced"));var Ua=Object.defineProperty,Wa=(n,t,e)=>t in n?Ua(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Q=(n,t,e)=>(Wa(n,typeof t!="symbol"?t+"":t,e),e);class se{unwrap(){const t=this;if(t.isOk)return t.value;throw t.error}}class Ha extends se{constructor(t){if(super(),Q(this,"value"),Q(this,"isOk",!0),Q(this,"isError",!1),this.value=t,t instanceof Error)throw new Error("Attempted to construct Ok from Error.")}}class Mt extends se{constructor(t){super(),Q(this,"error"),Q(this,"isOk",!1),Q(this,"isError",!0),this.error=t}}var On;(n=>{function t(a=void 0){return new Ha(a)}n.Ok=t;function e(a){return a===void 0?new Mt(new Error):new Mt(a instanceof Error?a:new Error(a))}n.Err=e})(On||(On={}));On.Err;function Qa(n){return n.length===0}On.Ok;const Ja={mounted(n,{value:t}){t(n)},unmounted(n,{value:t}){t(null)},getSSRProps(){return{}}};export{Ba as a,Ka as c,qa as d,Ja as e,Qa as i,Va as k,Xa as l,Ga as p,Ya as u};
//# sourceMappingURL=extractRootEl-447eb833.js.map
