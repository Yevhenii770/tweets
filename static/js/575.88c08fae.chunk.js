"use strict";(self.webpackChunktest_tweets=self.webpackChunktest_tweets||[]).push([[575],{5575:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var a,r=n(168),o=n(4934).Z.div(a||(a=(0,r.Z)(["\n  max-width: 1236px;\n  margin: 0 auto;\n  height: 90vh;\n  padding: 20px 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=n(6058),i=n.n(c),s=n(184),l=function(){return(0,s.jsx)("main",{children:(0,s.jsx)(o,{children:(0,s.jsx)("div",{children:(0,s.jsx)(i(),{color:"#5d44a6",size:90})})})})}},6058:function(t,e,n){var a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(t,e,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,a,r)}:function(t,e,n,a){void 0===a&&(a=n),t[a]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e},i=this&&this.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var s=c(n(2791)),l=n(8945),u=n(7074),d=[(0,u.createAnimation)("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}","pacman-1"),(0,u.createAnimation)("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}","pacman-2")];e.default=function(t){var e=t.loading,n=void 0===e||e,r=t.color,o=void 0===r?"#000000":r,c=t.speedMultiplier,p=void 0===c?1:c,f=t.cssOverride,m=void 0===f?{}:f,v=t.size,h=void 0===v?25:v,b=t.margin,g=void 0===b?2:b,y=i(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),O=(0,l.parseLengthAndUnit)(h),_=O.value,w=O.unit,j=a({display:"inherit",position:"relative",fontSize:0,height:"".concat(2*_).concat(w),width:"".concat(2*_).concat(w)},m),x=(0,u.createAnimation)("PacmanLoader","75% {opacity: 0.7}\n    100% {transform: translate(".concat("".concat(-4*_).concat(w),", ").concat("".concat(-_/4).concat(w),")}"),"ball"),P=function(t){return{width:"".concat(_/3).concat(w),height:"".concat(_/3).concat(w),backgroundColor:o,margin:(0,l.cssValue)(g),borderRadius:"100%",transform:"translate(0, ".concat("".concat(-_/4).concat(w),")"),position:"absolute",top:"".concat(_).concat(w),left:"".concat(4*_).concat(w),animation:"".concat(x," ").concat(1/p,"s ").concat(.25*t,"s infinite linear"),animationFillMode:"both"}},M="".concat((0,l.cssValue)(h)," solid transparent"),E="".concat((0,l.cssValue)(h)," solid ").concat(o),A=function(t){return{width:0,height:0,borderRight:M,borderTop:0===t?M:E,borderLeft:E,borderBottom:0===t?E:M,borderRadius:(0,l.cssValue)(h),position:"absolute",animation:"".concat(d[t]," ").concat(.8/p,"s infinite ease-in-out"),animationFillMode:"both"}},L=A(0),S=A(1);return n?s.createElement("span",a({style:j},y),s.createElement("span",{style:L}),s.createElement("span",{style:S}),s.createElement("span",{style:P(2)}),s.createElement("span",{style:P(3)}),s.createElement("span",{style:P(4)}),s.createElement("span",{style:P(5)})):null}},7074:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(t,e,n){var a="react-spinners-".concat(t,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,c="\n    @keyframes ".concat(a," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(c,0),a}},8945:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(t){if("number"===typeof t)return{value:t,unit:"px"};var e,a=(t.match(/^[0-9.]*/)||"").toString();e=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(t.match(/[^0-9]*$/)||"").toString();return n[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=a,e.cssValue=function(t){var e=a(t);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=575.88c08fae.chunk.js.map