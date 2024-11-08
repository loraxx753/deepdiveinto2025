/*! For license information please see components-ThirdParty-ShadCn-Resizable-story.7eef70c7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmeanwhilejs=self.webpackChunkmeanwhilejs||[]).push([[6415],{"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./src/components/ThirdParty/ShadCn/Resizable/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WM:()=>ResizableHandle,wV:()=>ResizablePanel,HK:()=>ResizablePanelGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),grip_vertical=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/grip-vertical.js"),react_resizable_panels_browser_esm=__webpack_require__("./node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ResizablePanelGroup=function(_a){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(react_resizable_panels_browser_esm.YZ,__assign({className:(0,utils.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",className)},props))},ResizablePanel=react_resizable_panels_browser_esm.Zk,ResizableHandle=function(_a){var withHandle=_a.withHandle,className=_a.className,props=__rest(_a,["withHandle","className"]);return(0,jsx_runtime.jsx)(react_resizable_panels_browser_esm.TW,__assign({className:(0,utils.cn)("relative flex w-px items-center justify-center bg-zinc-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-zinc-800 dark:focus-visible:ring-zinc-300",className)},props,{children:withHandle&&(0,jsx_runtime.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800",children:(0,jsx_runtime.jsx)(grip_vertical.A,{className:"h-2.5 w-2.5"})})}))};try{ResizablePanelGroup.displayName="ResizablePanelGroup",ResizablePanelGroup.__docgenInfo={description:"",displayName:"ResizablePanelGroup",props:{autoSaveId:{defaultValue:null,description:"",name:"autoSaveId",required:!1,type:{name:"string | null | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null | undefined"}},keyboardResizeBy:{defaultValue:null,description:"",name:"keyboardResizeBy",required:!1,type:{name:"number | null | undefined"}},onLayout:{defaultValue:null,description:"",name:"onLayout",required:!1,type:{name:"PanelGroupOnLayout | null | undefined"}},storage:{defaultValue:null,description:"",name:"storage",required:!1,type:{name:"PanelGroupStorage | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizablePanelGroup"]={docgenInfo:ResizablePanelGroup.__docgenInfo,name:"ResizablePanelGroup",path:"src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizablePanelGroup"})}catch(__react_docgen_typescript_loader_error){}try{ResizablePanel.displayName="ResizablePanel",ResizablePanel.__docgenInfo={description:"",displayName:"ResizablePanel",props:{collapsedSize:{defaultValue:null,description:"",name:"collapsedSize",required:!1,type:{name:"number | undefined"}},collapsible:{defaultValue:null,description:"",name:"collapsible",required:!1,type:{name:"boolean | undefined"}},defaultSize:{defaultValue:null,description:"",name:"defaultSize",required:!1,type:{name:"number | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number | undefined"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number | undefined"}},onCollapse:{defaultValue:null,description:"",name:"onCollapse",required:!1,type:{name:"PanelOnCollapse | undefined"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"PanelOnExpand | undefined"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"PanelOnResize | undefined"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"number | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizablePanel"]={docgenInfo:ResizablePanel.__docgenInfo,name:"ResizablePanel",path:"src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizablePanel"})}catch(__react_docgen_typescript_loader_error){}try{ResizableHandle.displayName="ResizableHandle",ResizableHandle.__docgenInfo={description:"",displayName:"ResizableHandle",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},hitAreaMargins:{defaultValue:null,description:"",name:"hitAreaMargins",required:!1,type:{name:"PointerHitAreaMargins | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},onDragging:{defaultValue:null,description:"",name:"onDragging",required:!1,type:{name:"PanelResizeHandleOnDragging | undefined"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},withHandle:{defaultValue:null,description:"",name:"withHandle",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizableHandle"]={docgenInfo:ResizableHandle.__docgenInfo,name:"ResizableHandle",path:"src/components/ThirdParty/ShadCn/Resizable/component.tsx#ResizableHandle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThirdParty/ShadCn/Resizable/story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThirdParty/ShadCn/Resizable/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_2__.HK,parameters:{docs:{subtitle:"Accessible resizable panel groups and layouts with keyboard support.",description:{component:"[ShadCn Documentation](https://ui.shadcn.com/docs/components/resizable) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/resizable) | [API Reference](https://www.radix-ui.com/primitives/docs/components/resizable#api-reference)"}}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}};var Default={render:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.HK,{direction:"horizontal",className:"max-w-md rounded-lg border",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.wV,{defaultSize:50,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-[200px] items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"One"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.WM,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.wV,{defaultSize:50,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.HK,{direction:"vertical",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.wV,{defaultSize:25,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"Two"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.WM,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.wV,{defaultSize:75,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-full items-center justify-center p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"font-semibold",children:"Three"})})})]})})]})}}}}]);