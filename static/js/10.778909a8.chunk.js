(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1384:function(t,e,n){"use strict";n.r(e);var r,c,o,a,s,i,u,b,j,l,d,p=n(7),f=n(1),O=n(2),x=n(4),h=n(66),m=n(13),g=n(242),v=Object(x.e)(O.X)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),y=n(0),w=Object(x.e)(O.l)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(t){return t.theme.colors.gradients.bubblegum})),C=function(){var t=Object(m.b)().t;return Object(y.jsx)(w,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(O.R,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.l,{pr:"32px",children:[Object(y.jsx)(O.T,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:t("Voting")}),Object(y.jsx)(O.T,{as:"h3",scale:"lg",mb:"16px",children:t("Have your say in the future of the Scaryswap Ecosystem")}),Object(y.jsx)(O.o,{startIcon:Object(y.jsx)(O.Hb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:t("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},I=Object(x.e)(O.l)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(t){return t.theme.colors.gradients.bubblegum})),T=function(){var t=Object(m.b)().t;return Object(y.jsx)(I,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(O.R,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.l,{pr:"32px",children:[Object(y.jsx)(O.T,{as:"h2",scale:"lg",mb:"16px",children:t("Got a suggestion?")}),Object(y.jsx)(O.Xb,{as:"p",children:t("Community proposals are a great way to see how the community feels about your ideas.")}),Object(y.jsx)(O.Xb,{as:"p",mb:"16px",children:t("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(y.jsx)(O.o,{startIcon:Object(y.jsx)(O.Hb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:t("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},S=n(6),k=n(8),L=n(68),E=n(374),N=n(835),R=n(112),A=n(805),D=n(867),M=n(836),P=n.n(M),X=n(806),H=Object(x.e)(O.R)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(t){return t.theme.colors.cardBorder})),V=x.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),H),B=function(){return Object(y.jsx)(V,{children:P()(X.d).map((function(t){return Object(y.jsxs)(H,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(y.jsxs)(O.l,{style:{flex:1},children:[Object(y.jsx)(O.Lb,{height:"21px",width:"70%",mb:"4px"}),Object(y.jsx)(O.Lb,{height:"21px",width:"30%",mb:"4px"}),Object(y.jsx)(O.Lb,{height:"21px",width:"40%"})]}),Object(y.jsx)(O.Lb,{height:"32px",width:"32px"})]},t)}))})},G=x.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(t){return t.theme.colors.input})),J=function(t){switch(t){case R.b.COMMUNITY:return 1;case R.b.ALL:return 2;case R.b.CORE:default:return 0}},U=function(t){var e=t.proposalType,n=t.onTypeChange,r=Object(m.b)().t;return Object(y.jsx)(G,{children:Object(y.jsxs)(O.Ub,{activeIndex:J(e),onItemClick:function(t){n(function(t){switch(t){case 1:return R.b.COMMUNITY;case 2:return R.b.ALL;default:return R.b.CORE}}(t))},children:[Object(y.jsx)(O.Tb,{children:Object(y.jsxs)(O.R,{alignItems:"center",children:[Object(y.jsx)(O.jc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(y.jsxs)(O.Tb,{children:[" ",Object(y.jsxs)(O.R,{alignItems:"center",children:[Object(y.jsx)(O.J,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(y.jsx)(O.Tb,{children:"All"})]})})},Y=n(20),F=n(782),_=function(t){var e=Object(Y.default)(1e3*t);return Object(F.default)(e,"MMM do, yyyy HH:mm")},z=function(t){var e=t.startDate,n=t.endDate,r=t.proposalState,c=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===R.a.CLOSED?Object(y.jsx)(O.Xb,Object(S.a)(Object(S.a)({},o),{},{children:c("Ended %date%",{date:_(n)})})):r===R.a.PENDING?Object(y.jsx)(O.Xb,Object(S.a)(Object(S.a)({},o),{},{children:c("Starts %date%",{date:_(e)})})):Object(y.jsx)(O.Xb,Object(S.a)(Object(S.a)({},o),{},{children:c("Ends %date%",{date:_(n)})}))},Q=n(850),W=Object(x.e)(h.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.dropdown})),q=function(t){var e=t.proposal,n="/voting/proposal/".concat(e.id);return Object(y.jsxs)(W,{to:n,children:[Object(y.jsxs)(O.l,{as:"span",style:{flex:1},children:[Object(y.jsx)(O.Xb,{bold:!0,mb:"8px",children:e.title}),Object(y.jsx)(O.R,{alignItems:"center",mb:"8px",children:Object(y.jsx)(z,{startDate:e.start,endDate:e.end,proposalState:e.state})}),Object(y.jsxs)(O.R,{alignItems:"center",children:[Object(y.jsx)(Q.a,{proposalState:e.state}),Object(y.jsx)(Q.b,{isCoreProposal:Object(A.h)(e),ml:"8px"})]})]}),Object(y.jsx)(O.W,{variant:"text",children:Object(y.jsx)(O.e,{width:"24px"})})]})},K=Object(x.e)(O.R).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(t){return t.theme.colors.cardBorder})),Z=x.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:R.a.ACTIVE,label:"Vote Now"},{value:R.a.PENDING,label:"Soon"},{value:R.a.CLOSED,label:"Closed"}],tt=function(t){var e=t.filterState,n=t.onFilterChange,r=t.isLoading,c=Object(m.b)().t;return Object(y.jsx)(K,{children:$.map((function(t){var o=t.value,a=t.label;return Object(y.jsxs)(Z,{children:[Object(y.jsx)(O.Ib,{scale:"sm",value:o,checked:e===o,onChange:function(t){var e=t.currentTarget.value;n(e)},disabled:r}),Object(y.jsx)(O.Xb,{ml:"8px",children:c(a)})]},a)}))})},et=function(){var t=Object(m.b)().t,e=Object(f.useState)({proposalType:R.b.CORE,filterState:R.a.ACTIVE}),n=Object(k.a)(e,2),r=n[0],c=n[1],o=Object(N.b)(),a=Object(N.c)(),s=Object(L.b)(),i=r.proposalType,u=r.filterState,b=o===R.d.LOADING,j=o===R.d.IDLE;Object(f.useEffect)((function(){s(Object(E.c)({first:1e3,state:u}))}),[u,s]);var l=Object(A.b)(Object(A.c)(a,i),u);return Object(y.jsxs)(g.a,{py:"40px",children:[Object(y.jsx)(O.l,{mb:"48px",children:Object(y.jsxs)(O.m,{children:[Object(y.jsx)(D.a,{to:"/",children:t("Home")}),Object(y.jsx)(O.Xb,{children:t("Voting")})]})}),Object(y.jsx)(O.T,{as:"h2",scale:"xl",mb:"32px",children:t("Proposals")}),Object(y.jsxs)(O.s,{children:[Object(y.jsx)(U,{proposalType:i,onTypeChange:function(t){c((function(e){return Object(S.a)(Object(S.a)({},e),{},{proposalType:t})}))}}),Object(y.jsx)(tt,{filterState:u,onFilterChange:function(t){c((function(e){return Object(S.a)(Object(S.a)({},e),{},{filterState:t})}))},isLoading:b}),b&&Object(y.jsx)(B,{}),j&&l.length>0&&l.map((function(t){return Object(y.jsx)(q,{proposal:t},t.id)})),j&&0===l.length&&Object(y.jsx)(O.R,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(y.jsx)(O.T,{as:"h5",children:t("No proposals found")})})]})]})},nt=x.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),rt=x.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));e.default=function(){return Object(y.jsxs)(O.R,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(y.jsx)(nt,{children:Object(y.jsx)(C,{})}),Object(y.jsx)(rt,{children:Object(y.jsx)(et,{})}),Object(y.jsx)(nt,{children:Object(y.jsx)(T,{})})]})}},805:function(t,e,n){"use strict";n.d(e,"h",(function(){return x})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return v})),n.d(e,"i",(function(){return y})),n.d(e,"g",(function(){return w})),n.d(e,"a",(function(){return C})),n.d(e,"f",(function(){return I}));var r=n(21),c=n(41),o=n(6),a=n(3),s=n.n(a),i=n(12),u=n(14),b=n.n(u),j=n(18),l=n(121),d=n(22),p=n(112),f=n(92),O=n(806),x=function(t){return t.author.toLowerCase()===O.a.toLowerCase()},h=function(t,e){switch(e){case p.b.COMMUNITY:return t.filter((function(t){return!x(t)}));case p.b.CORE:return t.filter((function(t){return x(t)}));case p.b.ALL:default:return t}},m=function(t,e){return t.filter((function(t){return t.state===e}))},g=function(){return{plugins:{},network:56,strategies:[{name:"Scaryswap",params:{symbol:"SCARY",address:Object(j.f)(),decimals:18}}]}},v=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},y=function(){var t=Object(i.a)(s.a.mark((function t(e){var n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l.d,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:if((n=t.sent).ok){t.next=8;break}return t.next=6,n.json();case 6:throw r=t.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return t.next=10,n.json();case 10:return c=t.sent,t.abrupt("return",c);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(i.a)(s.a.mark((function t(e,n,r){var c,o,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,t.t0){t.next=5;break}return t.next=4,f.a.getBlockNumber();case 4:t.t0=t.sent;case 5:return c=t.t0,t.next=8,fetch("".concat(l.e,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:e,block:c,poolAddresses:n})});case 8:return o=t.sent,t.next=11,o.json();case 11:return a=t.sent,t.abrupt("return",a.data);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(t){return t.reduce((function(t,e){var n=e.proposal.choices[e.choice-1];return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},n,t[n]?[].concat(Object(c.a)(t[n]),[e]):[e]))}),{})},I=function(t){return t.reduce((function(t,e){var n,r=new b.a(null===(n=e.metadata)||void 0===n?void 0:n.votingPower);return t.plus(r)}),d.d)}},806:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return i}));var r=10,c="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},835:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return i}));var r=n(32),c=function(){var t=Object(r.c)((function(t){return t.voting.proposals}));return Object.values(t)},o=function(t){return Object(r.c)((function(e){return e.voting.proposals[t]}))},a=function(t){var e=Object(r.c)((function(e){return e.voting.votes[t]}));return e?e.filter((function(t){return!0!==t._inValid})):[]},s=function(){return Object(r.c)((function(t){return t.voting.voteLoadingStatus}))},i=function(){return Object(r.c)((function(t){return t.voting.proposalLoadingStatus}))}},836:function(t,e,n){var r=n(486),c=n(868),o=n(869),a=4294967295,s=Math.min;t.exports=function(t,e){if((t=o(t))<1||t>9007199254740991)return[];var n=a,i=s(t,a);e=c(e),t-=a;for(var u=r(i,e);++n<t;)e(n);return u}},850:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return j}));var r=n(6),c=n(50),o=(n(1),n(189)),a=n(112),s=n(0),i=["proposalState"],u=["isCoreProposal"],b=function(t){var e=t.proposalState,n=Object(c.a)(t,i);return e===a.a.ACTIVE?Object(s.jsx)(o.h,Object(r.a)({},n)):e===a.a.PENDING?Object(s.jsx)(o.g,Object(r.a)({},n)):Object(s.jsx)(o.a,Object(r.a)({},n))},j=function(t){var e=t.isCoreProposal,n=Object(c.a)(t,u);return e?Object(s.jsx)(o.d,Object(r.a)({},n)):Object(s.jsx)(o.b,Object(r.a)({},n))}},867:function(t,e,n){"use strict";var r,c=n(7),o=n(66),a=n(4),s=Object(a.e)(o.a)(r||(r=Object(c.a)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.primaryBright}));e.a=s},868:function(t,e,n){var r=n(173);t.exports=function(t){return"function"==typeof t?t:r}},869:function(t,e,n){var r=n(870);t.exports=function(t){var e=r(t),n=e%1;return e===e?n?e-n:e:0}},870:function(t,e,n){var r=n(488),c=1/0;t.exports=function(t){return t?(t=r(t))===c||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}}}]);
//# sourceMappingURL=10.778909a8.chunk.js.map