(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(211),c=a(201),o=a(192),i=a(193);a(200);var m=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){var n=[],r=[];function o(){var o=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var r=n[e],l=r.getBoundingClientRect().top;l>=0&&l<=a&&(t=r),e+=1}return t}();if(o){var i=0,m=!1;for(r=document.getElementsByClassName(e);i<r.length&&!m;){var s=r[i],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));o.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),m=!0),i+=1}}}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}))},s=a(197),d=a.n(s),u=a(133),E=a.n(u);function v(e){var t=e.headings;return m("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:E.a.tableOfContents},r.a.createElement(g,{headings:t})))}function g(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(g,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(o.a)().siteConfig,n=void 0===a?{}:a,m=n.url,s=n.title,u=e.content,g=u.metadata,f=g.description,p=g.title,h=g.permalink,b=(g.editUrl,g.lastUpdatedAt,g.lastUpdatedBy,g.version),_=u.frontMatter,w=_.image,y=_.keywords,N=_.hide_title,k=_.hide_table_of_contents,C=void 0===k||k,L=p?p+" | "+s:s,O=m+Object(i.a)(w);return Object(c.a)(w)||(O=w),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,L),r.a.createElement("meta",{property:"og:title",content:L}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),y&&y.length&&r.a.createElement("meta",{name:"keywords",content:y.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:O}),w&&r.a.createElement("meta",{property:"twitter:image",content:O}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&r.a.createElement("meta",{property:"og:url",content:m+h}),h&&r.a.createElement("link",{rel:"canonical",href:m+h})),r.a.createElement("div",{className:d()("container padding-vert--lg",E.a.docItemWrapper)},r.a.createElement("div",{className:"row row--docitem"},r.a.createElement("div",{className:d()("col",(t={},t[E.a.docItemCol]=!C,t))},r.a.createElement("div",{className:E.a.docItemContainer},r.a.createElement("article",null,b&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",b)),!N&&r.a.createElement("header",null,r.a.createElement("h1",{className:E.a.docTitle},p)),r.a.createElement("div",{className:"markdown"},r.a.createElement(u,null))))),!C&&u.rightToc&&r.a.createElement(v,{headings:u.rightToc}))))}}}]);