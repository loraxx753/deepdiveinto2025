(self.webpackChunkmeanwhilejs=self.webpackChunkmeanwhilejs||[]).push([[6102,1421],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/lib/tailwind/theme/animation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const animationraw={animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite",sparkle:"sparkle 2s ease-in-out infinite"},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}},sparkle:{"0%, 100%":{opacity:"0.75",scale:"0.9"},"50%":{opacity:"1",scale:"1"}}},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}},animation={animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite",sparkle:"sparkle 2s ease-in-out infinite"},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}},sparkle:{"0%, 100%":{opacity:"0.75",scale:"0.9"},"50%":{opacity:"1",scale:"1"}}},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}};var extend_animation=__webpack_require__("./src/lib/tailwind/theme/extend/animation.mdx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tailwind/Theme/Animation"}),"\n",(0,jsx_runtime.jsxs)(_components.h1,{id:"animation-controls-jump-to-source",children:["Animation Controls ",(0,jsx_runtime.jsx)("small",{className:"text-xs",children:(0,jsx_runtime.jsx)(_components.a,{href:"#source-code",children:"Jump to source"})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"animation",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/animation",rel:"nofollow",children:"Animation"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Defines the animations with their names and keyframe properties. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation",rel:"nofollow",children:"MDN Animation"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`animation: ${JSON.stringify(animation.animation,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"none",children:"None"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"No animation applied."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`none: ${JSON.stringify(animation.animation.none,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"spin",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/animation#spin",rel:"nofollow",children:"Spin"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adds a linear spin animation to elements like loading indicators."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`spin: ${JSON.stringify(animation.animation.spin,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ping",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/animation#ping",rel:"nofollow",children:"Ping"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Make an element scale and fade like a radar ping or ripple of water — useful for things like notification badges."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`ping: ${JSON.stringify(animation.animation.ping,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pulse",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/animation#pulse",rel:"nofollow",children:"Pulse"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Utility to make an element gently fade in and out — useful for things like skeleton loaders."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`pulse: ${JSON.stringify(animation.animation.pulse,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bounce",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/animation#bounce",rel:"nofollow",children:"Bounce"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Makes an element bounce up and down — useful for things like “scroll down” indicators."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`bounce: ${JSON.stringify(animation.animation.bounce,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"keyframes",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/keyframes",rel:"nofollow",children:"Keyframes"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Defines the keyframes for the animations. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",rel:"nofollow",children:"MDN Keyframes"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`keyframes: ${JSON.stringify(animation.keyframes,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition-delay",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/transition-delay",rel:"nofollow",children:"Transition Delay"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Specifies the delay before the transition starts. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",rel:"nofollow",children:"MDN Transition Delay"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`transitionDelay: ${JSON.stringify(animation.transitionDelay,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition-duration",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/transition-duration",rel:"nofollow",children:"Transition Duration"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Specifies the duration of the transition. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",rel:"nofollow",children:"MDN Transition Duration"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`transitionDuration: ${JSON.stringify(animation.transitionDuration,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition-property",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/transition-property",rel:"nofollow",children:"Transition Property"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Specifies the properties to which transitions should apply. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property",rel:"nofollow",children:"MDN Transition Property"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`trainsitionProperty: ${JSON.stringify(animation.trainsitionProperty,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition-timing-function",children:(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/transition-timing-function",rel:"nofollow",children:"Transition Timing Function"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Specifies the speed curve of the transition effect. ",(0,jsx_runtime.jsx)("small",{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",rel:"nofollow",children:"MDN Transition Timing Function"})})]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`transitionTimingFunction: ${JSON.stringify(animation.transitionTimingFunction,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"DEFAULT"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'This is the default easing function, commonly known as "ease" in CSS. It creates a smooth transition that starts slowly, speeds up in the middle, and then slows down again towards the end.'}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`DEFAULT: ${JSON.stringify(animation.transitionTimingFunction.DEFAULT,null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.2, 1"}),": Controls the end portion of the transition, making it slow down towards the end."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear",children:"linear"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"linear"})," easing function creates a transition that occurs at a constant speed from start to finish. There are no accelerations or decelerations."]}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`linear: ${JSON.stringify(animation.transitionTimingFunction.linear,null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"This means the change happens at the same rate throughout the duration, resulting in a straight line when plotted on a graph."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in",children:"in"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'This is the "ease-in" function, which starts slowly and then speeds up.'}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`in: ${JSON.stringify(animation.transitionTimingFunction.in,null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"1, 1"}),": Controls the end portion, making it finish quickly."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"out",children:"out"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'This is the "ease-out" function, which starts quickly and then slows down towards the end.'}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`out: ${JSON.stringify(animation.transitionTimingFunction.out,null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0, 0"}),": Controls the initial portion of the transition, making it start quickly."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.2, 1"}),": Controls the end portion, making it slow down towards the end."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in-out",children:"in-out"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'This is the "ease-in-out" function, which starts slowly, speeds up in the middle, and then slows down again at the end.'}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:`'in-out': ${JSON.stringify(animation.transitionTimingFunction["in-out"],null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.4, 0"}),": Controls the initial portion of the transition, making it start slowly."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"0.2, 1"}),": Controls the end portion of the transition, making it slow down towards the end."]}),"\n"]}),"\n","function"==typeof extend_animation.Documentation&&""!==(0,extend_animation.Documentation)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"Extended Documentation"}),(0,jsx_runtime.jsx)(extend_animation.Documentation,{})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:animationraw}),"\n","function"==typeof extend_animation.SourceCode&&""!==(0,extend_animation.SourceCode)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"Extended Source Code"}),(0,jsx_runtime.jsx)(extend_animation.SourceCode,{})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/lib/tailwind/theme/extend/animation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Documentation:()=>Documentation,SourceCode:()=>SourceCode,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const animationraw={animation:{...{"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out"},...{meteor:"meteor var(--duration) var(--delay) ease-in-out infinite","pop-blob":"pop-blob 5s infinite",shine:"shine 8s ease-in-out infinite"},...{grid:"grid 15s linear infinite"}},keyframes:{...{"accordion-down":{from:{height:"0"},to:{height:"var(--radix-accordion-content-height)"}},"accordion-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:"0"}}},...{meteor:{"0%":{transform:"translateY(-20%) translateX(-50%)"},"100%":{transform:"translateY(300%) translateX(-50%)"}},"pop-blob":{"0%":{transform:"scale(1)"},"33%":{transform:"scale(1.2)"},"66%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}},"bg-position":{"0%":{backgroundPosition:"0% 50%"},"100%":{backgroundPosition:"100% 50%"}},shine:{from:{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}},...{grid:{"0%":{transform:"translateY(-50%)"},"100%":{transform:"translateY(0)"}},"shine-pulse":{"0%":{"background-position":"0% 0%"},"50%":{"background-position":"100% 100%"},to:{"background-position":"0% 0%"}}}}};function SourceCode(){return(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:animationraw})}function Documentation(){return""}function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"extended-animation",children:"Extended Animation"}),"\n",(0,jsx_runtime.jsx)(dist.W8,{isTemplate:!0,title:"Tailwind/Theme/Extended/Animation"}),"\n",(0,jsx_runtime.jsx)(Documentation,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(SourceCode,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);