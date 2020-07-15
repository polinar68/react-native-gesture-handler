(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(9),c=(a(0),a(191)),i={id:"state",title:"Handler State",sidebar_label:"Handler State"},s={id:"version-1.6.1/state",title:"Handler State",description:'As described in "About Gesture Handlers" section gesture handlers can be treated as "state machines".',source:"@site/versioned_docs/version-1.6.1/state.md",permalink:"/react-native-gesture-handler/docs/state",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/state.md",version:"1.6.1",sidebar_label:"Handler State",sidebar:"version-1.6.1/docs",previous:{title:"About Gesture Handlers",permalink:"/react-native-gesture-handler/docs/about-handlers"},next:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/interactions"}},o=[{value:"Accessing state",id:"accessing-state",children:[]},{value:"State flows",id:"state-flows",children:[]},{value:"States",id:"states",children:[{value:"UNDETERMINED",id:"undetermined",children:[]},{value:"FAILED",id:"failed",children:[]},{value:"BEGAN",id:"began",children:[]},{value:"CANCELLED",id:"cancelled",children:[]},{value:"ACTIVE",id:"active",children:[]},{value:"END",id:"end",children:[]}]}],b={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"As described in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/about-handlers"}),'"About Gesture Handlers"')," section gesture handlers can be treated as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Finite-state_machine"}),'"state machines"'),".\nEach handler instance at any given time has an assigned state that can change when new touch events arrive or can be forced by the touch system to change it state in certain circumstances."),Object(c.b)("p",null,"There are six possible states for the handler:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#undetermined"}),"UNDETERMINED")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#failed"}),"FAILED")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#began"}),"BEGAN")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#cancelled"}),"CANCELLED")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#active"}),"ACTIVE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#end"}),"END"))),Object(c.b)("p",null,"Each state has its own section underneath describing the details."),Object(c.b)("h2",{id:"accessing-state"},"Accessing state"),Object(c.b)("p",null,"We can monitor handler's state changes using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#onhandlerstatechange"}),Object(c.b)("inlineCode",{parentName:"a"},"onHandlerStateChange"))," callback and accessed from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#state"}),Object(c.b)("inlineCode",{parentName:"a"},"state"))," attribute of the event."),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#state"}),Object(c.b)("inlineCode",{parentName:"a"},"state"))," as provided in the event attribute can be matched against one of the constants exported under ",Object(c.b)("inlineCode",{parentName:"p"},"State")," object (see the example below).\nThe constants corresponds"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"import { State, LongPressGestureHandler } from 'react-native-gesture-handler';\n\nclass Demo extends Component {\n  _handleStateChange = ({ nativeEvent }) => {\n    if (nativeEvent.state === State.ACTIVE) {\n      Alert.alert('Longpress');\n    }\n  };\n  render() {\n    return (\n      <LongPressGestureHandler onHandlerStateChange={this._handleStateChange}>\n        <Text style={styles.buttonText}>Longpress me</Text>\n      </LongPressGestureHandler>\n    );\n  }\n}\n")),Object(c.b)("h2",{id:"state-flows"},"State flows"),Object(c.b)("p",null,"The most typical flow of the state is when the gesture handler first picks up the initial touch events, then at some point it recognizes the touches and after the end of the gesture is recognized it resets back to the initial state. The flow looks as follows (longer arrows represent that there are possibly more touch events received before the state changes):"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#began"}),Object(c.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#active"}),Object(c.b)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#end"}),Object(c.b)("inlineCode",{parentName:"a"},"END"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(c.b)("p",null,"Here is another possible flow when the handler receive touches that causes it to fail recognition:"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#began"}),Object(c.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#failed"}),Object(c.b)("inlineCode",{parentName:"a"},"FAILED"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(c.b)("p",null,"Lastly even when the handler properly recognizes the gesture it may be interrupted by the touch system, in that case the flow looks as follows:"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#began"}),Object(c.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#active"}),Object(c.b)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#cancelled"}),Object(c.b)("inlineCode",{parentName:"a"},"CANCELLED"))," -> ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),Object(c.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(c.b)("h2",{id:"states"},"States"),Object(c.b)("p",null,"Section below lists all the possible handler states along with detailed description of each state:"),Object(c.b)("h3",{id:"undetermined"},"UNDETERMINED"),Object(c.b)("p",null,"This is the initial state of each handler. It also changes to that state when it is done recognizing and hasn't started recogninzing another gesture."),Object(c.b)("h3",{id:"failed"},"FAILED"),Object(c.b)("p",null,"Handler has received some touches, but for some condition (e.g. finger traveled too long distance when ",Object(c.b)("inlineCode",{parentName:"p"},"maxDist")," property is set) it won't get ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#ACTIVE"}),"activated")," and gesture was not recognized. After that handler is reset to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),"the initial state"),"."),Object(c.b)("h3",{id:"began"},"BEGAN"),Object(c.b)("p",null,"Handler has started receiving touch stream but hasn't yet receive enough data to either ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#failed"}),"fail")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#active"}),"activate"),"."),Object(c.b)("h3",{id:"cancelled"},"CANCELLED"),Object(c.b)("p",null,"The gesture recognizer has received signal (possibly new touches or a command from the touch system controller) resulting in the cancellation of a continuous gesture. Gesture recognizer is reset to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),"the initial state"),"."),Object(c.b)("h3",{id:"active"},"ACTIVE"),Object(c.b)("p",null,"Handler has recognized gesture and will stay in the active as until the gesture finishes (normally when user lifts the finger) or get cancelled by the touch system. Under normal circumstances it would turn into ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#end"}),"ended")," state. In case it is cancelled by the touch system it would turn into ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#cancelled"}),"CANCELLED")," state.\nLearn about ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/about-handlers#discrete-vs-continuous"}),"discrete and continuous handlers here")," to understand how long handler can be kept in the ACTIVE state."),Object(c.b)("h3",{id:"end"},"END"),Object(c.b)("p",null,"The gesture recognizer has received touches recognized as the end of the gesture. After that it will reset to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#undetermined"}),"the initial state"),"."))}l.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,u=d["".concat(i,".").concat(p)]||d[p]||h[p]||c;return a?r.a.createElement(u,s(s({ref:t},b),{},{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);