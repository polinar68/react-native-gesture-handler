(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(191)),o=n(193),c=n(206),l={id:"component-drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},d={id:"component-drawer-layout",title:"Drawer Layout",description:"This is a cross-platform replacement for React Native's DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.",source:"@site/docs/component-drawer-layout.mdx",permalink:"/react-native-gesture-handler/docs/next/component-drawer-layout",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/component-drawer-layout.mdx",version:"next",sidebar_label:"DrawerLayout",sidebar:"docs",previous:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/next/component-touchables"},next:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/next/contributing"}},s=[{value:"Usage:",id:"usage",children:[]},{value:"Properties:",id:"properties",children:[{value:"<code>drawerType</code>",id:"drawertype",children:[]},{value:"<code>edgeWidth</code>",id:"edgewidth",children:[]},{value:"<code>hideStatusBar</code>",id:"hidestatusbar",children:[]},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",children:[]},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>children</code>",id:"children",children:[]}]},{value:"Example:",id:"example",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a cross-platform replacement for React Native's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"DrawerLayoutAndroid")," component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"React Native docs")," for the detailed usage for standard parameters."),Object(i.b)("h2",{id:"usage"},"Usage:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DrawerLayout")," component isn't exported by default from the ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';\n")),Object(i.b)("h2",{id:"properties"},"Properties:"),Object(i.b)("p",null,"On top of the standard list of parameters DrawerLayout has an additional set of attributes to customize its behavior. Please refer to the list below:"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"drawertype"},Object(i.b)("inlineCode",{parentName:"h3"},"drawerType")),Object(i.b)("p",null,"possible values are: ",Object(i.b)("inlineCode",{parentName:"p"},"front"),", ",Object(i.b)("inlineCode",{parentName:"p"},"back")," or ",Object(i.b)("inlineCode",{parentName:"p"},"slide")," (default is ",Object(i.b)("inlineCode",{parentName:"p"},"front"),"). It specifies the way the drawer will be displayed. When set to ",Object(i.b)("inlineCode",{parentName:"p"},"front")," the drawer will slide in and out along with the gesture and will display on top of the content view. When ",Object(i.b)("inlineCode",{parentName:"p"},"back")," is used the drawer displays behind the content view and can be revealed with gesture of pulling the content view to the side. Finally ",Object(i.b)("inlineCode",{parentName:"p"},"slide")," option makes the drawer appear like it is attached to the side of the content view; when you pull both content view and drawer will follow the gesture."),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-slide.gif"),width:"280"})),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"front"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-front.gif"),width:"280"})),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"back"),":"),Object(i.b)(c.a,{mdxType:"GifGallery"},Object(i.b)("img",{src:Object(o.a)("gifs/drawer-back.gif"),width:"280"})),Object(i.b)("hr",null),Object(i.b)("h3",{id:"edgewidth"},Object(i.b)("inlineCode",{parentName:"h3"},"edgeWidth")),Object(i.b)("p",null,"number, allows for defining how far from the edge of the content view the gesture should activate."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hidestatusbar"},Object(i.b)("inlineCode",{parentName:"h3"},"hideStatusBar")),Object(i.b)("p",null,"boolean, when set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," Drawer component will use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html"}),"StatusBar"),' API to hide the OS status bar whenever the drawer is pulled or when its in an "open" state.'),Object(i.b)("hr",null),Object(i.b)("h3",{id:"statusbaranimation"},Object(i.b)("inlineCode",{parentName:"h3"},"statusBarAnimation")),Object(i.b)("p",null,"possible values are: ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),", ",Object(i.b)("inlineCode",{parentName:"p"},"none")," or ",Object(i.b)("inlineCode",{parentName:"p"},"fade")," (defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"slide"),"). Can be used when ",Object(i.b)("inlineCode",{parentName:"p"},"hideStatusBar")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and will select the animation used for hiding/showing the status bar. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html#statusbaranimation"}),"StatusBar")," documentation for more details."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"overlaycolor"},Object(i.b)("inlineCode",{parentName:"h3"},"overlayColor")),Object(i.b)("p",null,"color (default to ",Object(i.b)("inlineCode",{parentName:"p"},'"black"'),") of a semi-transparent overlay to be displayed on top of the content view when drawer gets open. A solid color should be used as the opacity is added by the Drawer itself and the opacity of the overlay is animated (from 0% to 70%)."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"rendernavigationview"},Object(i.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(i.b)("p",null,"function. This attribute is present in the standard implementation already and is one of the required params. Gesture handler version of DrawerLayout make it possible for the function passed as ",Object(i.b)("inlineCode",{parentName:"p"},"renderNavigationView")," to take an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened). This can be used by the drawer component to animated its children while the drawer is opening or closing."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"children"},Object(i.b)("inlineCode",{parentName:"h3"},"children")),Object(i.b)("p",null,"component or function. Children is a component which is rendered by default and is wrapped by drawer. However, it could be also a render function which takes an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened) is the same way like ",Object(i.b)("inlineCode",{parentName:"p"},"renderNavigationView")," prop."),Object(i.b)("h2",{id:"example"},"Example:"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/horizontalDrawer/index.js"}),"drawer example")," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'class Drawerable extends Component {\n  renderDrawer = () => {\n    return (\n      <View>\n        <Text>I am in the drawer!</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <View style={{ flex: 1 }}>\n        <DrawerLayout\n          drawerWidth={200}\n          drawerPosition={DrawerLayout.positions.Right}\n          drawerType="front"\n          drawerBackgroundColor="#ddd"\n          renderNavigationView={this.renderDrawer}>\n          <View>\n            <Text>Hello, it\'s me</Text>\n          </View>\n        </DrawerLayout>\n      </View>\n    );\n  }\n}\n')))}p.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,h=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?a.a.createElement(h,c(c({ref:t},d),{},{components:n})):a.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";var r=n(0),a=n(51);t.a=function(){return Object(r.useContext)(a.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(194);var r=n(192);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},194:function(e,t,n){"use strict";var r=n(17),a=n(35),i=n(195),o="".startsWith;r(r.P+r.F*n(196)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},195:function(e,t,n){var r=n(70),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},196:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},198:function(e,t,n){var r=n(17);r(r.S+r.F,"Object",{assign:n(202)})},199:function(e,t){t.f=Object.getOwnPropertySymbols},202:function(e,t,n){"use strict";var r=n(11),a=n(24),i=n(199),o=n(71),c=n(50),l=n(72),d=Object.assign;e.exports=!d||n(18)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||Object.keys(d({},t)).join("")!=r}))?function(e,t){for(var n=c(e),d=arguments.length,s=1,b=i.f,p=o.f;d>s;)for(var u,h=l(arguments[s++]),m=b?a(h).concat(b(h)):a(h),f=m.length,w=0;f>w;)u=m[w++],r&&!p.call(h,u)||(n[u]=h[u]);return n}:d},206:function(e,t,n){"use strict";n(198);var r=n(0),a=n.n(r),i={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return a.a.createElement("div",{style:i.container},r.Children.map(t,(function(e){return Object(r.cloneElement)(e,Object.assign(Object.assign({},e.props.style),{},{style:i.img}))})))}}}]);