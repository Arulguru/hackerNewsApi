(this.webpackJsonphackernewsapp=this.webpackJsonphackernewsapp||[]).push([[0],{50:function(t,n,e){"use strict";e.r(n);var r,c,a,o,s,i,u,j=e(1),l=e.n(j),d=e(22),b=e(2),h=e(4),f=e.n(h),O=e(7),p=e(8),x=e.n(p),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,e=t.by,r=t.url,c=t.time,a=t.title,o=t.score,s=t.text,i=t.parent,u=t.kids;return{id:n,by:e,url:r,time:c,title:a,score:o,text:s,parent:i,kids:u}},g="https://hacker-news.firebaseio.com/v0/",y="".concat(g,"newstories.json"),v="".concat(g,"beststories.json"),k="".concat(g,"topstories.json"),S="".concat(g,"item/"),w=function(){var t=Object(O.a)(f.a.mark((function t(n){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(S+n,".json")).then((function(t){var n=t.data;return n&&m(n)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),E=function(){var t=Object(O.a)(f.a.mark((function t(n){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(S+n,".json")).then((function(t){var n=t.data;return n&&m(n)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),I=function(){var t=Object(O.a)(f.a.mark((function t(n){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(S+n,".json")).then((function(t){var n=t.data;return n&&m(n)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),T=function(){var t=Object(O.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(y).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(O.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(v).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(O.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(k).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=e(5),_=e(6),B=_.b.section(r||(r=Object(M.a)(["\n    padding:5px;\n    margin-bottom:5px;\n    /* border-top: 1px solid #333;\n\n    &:first-of-type{\n        border-top:0;\n    }\n\n    &:last-of-type{\n        margin-bottom:0;\n        padding:0;\n    } */\n"]))),P=_.b.h1(c||(c=Object(M.a)(["\n    margin-bottom:10px;\n    margin-top:0;\n    font-size:14px;\n    line-height:2.0;\n    \n    text-decoration:none;\n\n    a{  padding:5px;\n        border-radius:8px;\n        color:#fff;\n        background-color:#4d4949;\n        text-decoration:none;\n        \n    }\n    a:hover{\n        background-color:#000;\n    }\n"]))),F=_.b.div(a||(a=Object(M.a)(["\nfont-style:italic;\nmargin-bottom:10px;\n\n >span:first-child{\n    margin-right:10px;\n} \n\n>span:not(:first-child):before{\n    content:'';\n    margin-right:8px;\n    margin-left:8px;\n}\n\n.story__meta-bold{\n    font-weight:bold;\n}\n"]))),R=_.b.span(o||(o=Object(M.a)(["\n    font-weight:bold;\n    color:",";\n"])),(function(t){return t.color||"red"})),z=function(t){var n=Math.floor((new Date-1e3*t)/1e3),e=Math.floor(n/31536e3);return e>1?"".concat(e," years ago"):(e=Math.floor(n/2592e3))>1?"".concat(e," months ago"):(e=Math.floor(n/86400))>1?"".concat(e," days ago"):(e=Math.floor(n/3600))>1?"".concat(e," hours ago"):(e=Math.floor(n/60))>1?"".concat(e," minutes ago"):"".concat(Math.floor(n)," seconds ago")},A=e(0),D=function(t){var n=t.url,e=t.title;return Object(A.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e})},H=function(t){var n=t.storyId,e=Object(j.useState)({}),r=Object(b.a)(e,2),c=r[0],a=r[1];return Object(j.useEffect)((function(){w(n).then((function(t){return t&&t.url&&a(t)}))}),[]),c&&c.url?Object(A.jsxs)(B,{"data-testid":"story",children:[Object(A.jsx)(P,{children:Object(A.jsx)("a",{target:"_blank",href:c.url,children:c.title})}),Object(A.jsxs)(F,{children:[Object(A.jsxs)("span",{"data-testid":"story-by",children:[Object(A.jsx)(R,{color:"#000",children:"By:"}),c.by]}),Object(A.jsxs)("span",{"data-testid":"story-time",children:[Object(A.jsx)(R,{color:"#000",children:"Posted:"})," ".concat(z(c.time))]}),Object(A.jsxs)("span",{children:[Object(A.jsx)(R,{color:"#000",children:"Score:"})," ".concat(c.score)]}),Object(A.jsx)(R,{children:Object(A.jsxs)("span",{children:["Comments:",Object(A.jsx)(D,{url:"https://news.ycombinator.com/item?id=".concat(n),title:"".concat(c.kids&&c.kids.length>0?c.kids.length:0," comments")})]})})]}),Object(A.jsx)("hr",{})]}):null},J=function(t){var n=t.url,e=t.title;return Object(A.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e})},L=function(t){var n=t.topStoryId,e=Object(j.useState)({}),r=Object(b.a)(e,2),c=r[0],a=r[1];return Object(j.useEffect)((function(){I(n).then((function(t){return t&&t.url&&a(t)}))}),[]),c&&c.url?Object(A.jsxs)(B,{"data-testid":"story",children:[Object(A.jsx)(P,{children:Object(A.jsx)("a",{target:"_blank",href:c.url,children:c.title})}),Object(A.jsxs)(F,{children:[Object(A.jsxs)("span",{"data-testid":"story-by",children:[Object(A.jsx)(R,{color:"#000",children:"By:"}),c.by]}),Object(A.jsxs)("span",{"data-testid":"story-time",children:[Object(A.jsx)(R,{color:"#000",children:"Posted:"})," ".concat(z(c.time))]}),Object(A.jsxs)("span",{children:[Object(A.jsx)(R,{color:"#000",children:"Score:"})," ".concat(c.score)]}),Object(A.jsx)(R,{children:Object(A.jsxs)("span",{children:["Comments:",Object(A.jsx)(J,{url:"https://news.ycombinator.com/item?id=".concat(n),title:"".concat(c.kids&&c.kids.length>0?c.kids.length:0," comments")})]})})]}),Object(A.jsx)("hr",{})]}):null},W=function(t){var n=t.url,e=t.title;return Object(A.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e})},q=function(t){var n=t.bestStoryId,e=Object(j.useState)({}),r=Object(b.a)(e,2),c=r[0],a=r[1];return Object(j.useEffect)((function(){E(n).then((function(t){return t&&t.url&&a(t)}))}),[]),c&&c.url?Object(A.jsxs)(B,{"data-testid":"story",children:[Object(A.jsx)(P,{children:Object(A.jsx)("a",{target:"_blank",href:c.url,children:c.title})}),Object(A.jsxs)(F,{children:[Object(A.jsxs)("span",{"data-testid":"story-by",children:[Object(A.jsx)(R,{color:"#000",children:"By:"}),c.by]}),Object(A.jsxs)("span",{"data-testid":"story-time",children:[Object(A.jsx)(R,{color:"#000",children:"Posted:"})," ".concat(z(c.time))]}),Object(A.jsxs)("span",{children:[Object(A.jsx)(R,{color:"#000",children:"Score:"})," ".concat(c.score)]}),Object(A.jsx)(R,{children:Object(A.jsxs)("span",{children:["Comments:",Object(A.jsx)(W,{url:"https://news.ycombinator.com/item?id=".concat(n),title:"".concat(c.kids&&c.kids.length>0?c.kids.length:0," comments")})]})})]}),Object(A.jsx)("hr",{})]}):null},G=Object(_.a)(s||(s=Object(M.a)(["\nbody{\n    margin:5px;\n    padding:5px;\n    background-color:#f2f0f0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:12px;\n}\n\nul{\n    margin:0;\n    padding:0;\n}\n"]))),K=_.b.main(i||(i=Object(M.a)(["\n    max-width:1140px;\n    padding:20px 15px;\n    margin :auto;\n"]))),Q=_.b.button(u||(u=Object(M.a)(["\n    font-size:25px;\n    font-weight:bold;\n    width:220px;\n    padding:5px;\n    color:white;\n    background-color:#333;\n    margin:10px;\n    box-shadow: 2px 2px solid white;\n"]))),U=function(){var t=Object(j.useState)([]),n=Object(b.a)(t,2),e=n[0],r=n[1],c=Object(j.useState)([]),a=Object(b.a)(c,2),o=a[0],s=a[1],i=Object(j.useState)([]),u=Object(b.a)(i,2),l=u[0],d=u[1],h=Object(j.useState)([]),f=Object(b.a)(h,2),O=(f[0],f[1],Object(j.useState)("block")),p=Object(b.a)(O,2),x=p[0],m=p[1],g=Object(j.useState)("none"),y=Object(b.a)(g,2),v=y[0],k=y[1],S=Object(j.useState)("none"),w=Object(b.a)(S,2),E=w[0],I=w[1];Object(j.useEffect)((function(){T().then((function(t){return t&&r(t)})),C().then((function(t){return t&&s(t)})),N().then((function(t){return t&&d(t)}))}),[]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(G,{}),Object(A.jsxs)(K,{"data-test-id":"stories-cointainer",children:[Object(A.jsx)("h1",{children:"News and Stories from HackerNewsApi"}),Object(A.jsx)(Q,{onClick:function(){m("block"),k("none"),I("none")},children:"NEW STORIES"}),Object(A.jsx)(Q,{onClick:function(){m("none"),k("block"),I("none")},children:"BEST STORIES"}),Object(A.jsx)(Q,{onClick:function(){m("none"),k("none"),I("block")},children:"TOP STORIES"}),Object(A.jsx)("br",{}),Object(A.jsx)("div",{className:"container-fluid",children:Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{style:{display:"".concat(x)},className:"col-md-3",children:[Object(A.jsx)("h2",{children:"NEW STORIES"}),e.map((function(t){return Object(A.jsx)(H,{storyId:t},t)}))]}),Object(A.jsxs)("div",{style:{display:"".concat(v)},className:"col-md-3",children:[Object(A.jsx)("h2",{children:"BEST STORIES"}),o.map((function(t){return Object(A.jsx)(q,{bestStoryId:t},t)}))]}),Object(A.jsxs)("div",{style:{display:"".concat(E)},className:"col-md-3",children:[Object(A.jsx)("h2",{children:"TOP STORIES"}),l.map((function(t){return Object(A.jsx)(L,{topStoryId:t},t)}))]})]})})]})]})},V=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(U,{})})},X=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),r(t),c(t),a(t),o(t)}))};Object(d.render)(Object(A.jsx)(l.a.StrictMode,{children:Object(A.jsx)(V,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.339ba699.chunk.js.map