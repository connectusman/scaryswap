(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{1161:function(e,t,n){var c=n(491),r=n(497),a=n(247),o=n(96),i=n(185),s=n(310),l=n(312),u=n(311),b=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||a(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!c(e).length;for(var n in e)if(b.call(e,n))return!1;return!0}},1386:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(21),i=n(3),s=n.n(i),l=n(6),u=n(12),b=n(8),j=n(1),d=n(2),x=n(74),p=n(37),h=n(836),O=n.n(h),f=n(1161),m=n.n(f),g=n(153),v=n(112),y=n(65),k=n(19),w=n(35),T=n(804),B=n(192),S=n(13),C=n(243),D=n(440),P=n(93),A=n(915),X=n(867),R=n(805),Y=n(880),I=n(7),z=n(4),L=n(0),M=z.e.label(c||(c=Object(I.a)(["\n  color: ",";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.text})),E=Object(z.e)(M)(r||(r=Object(I.a)(["\n  font-size: 20px;\n"]))),F=Object(z.e)(M)(a||(a=Object(I.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),H=function(e){var t=e.children;return Object(L.jsx)(d.Xb,{color:"failure",mb:"4px",children:t})},V=function(e){var t=e.errors;return Object(L.jsx)(d.l,{mt:"8px",children:t.map((function(e){return Object(L.jsx)(H,{children:e},e)}))})},N=n(41),q=n(221),J=n.n(q),W=n(50),U=["onRemove","onTextInput"],Z=function(e){var t=e.onRemove,n=e.onTextInput,c=Object(W.a)(e,U),r=Object(j.useState)(!1),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(j.useState)(!1),u=Object(b.a)(s,2),x=u[0],p=u[1];return Object(L.jsxs)(d.l,{position:"relative",mb:"16px",children:[Object(L.jsx)(d.Z,Object(l.a)(Object(l.a)({},c),{},{onChange:function(e){var t=e.currentTarget.value;i(x&&0===t.length),p(!0),n(t)},isWarning:o})),t&&Object(L.jsx)(d.l,{position:"absolute",right:"8px",top:"0px",zIndex:30,children:Object(L.jsx)(d.W,{variant:"text",onClick:t,children:Object(L.jsx)(d.H,{})})})]})},Q=function(){return{id:J()(),value:""}},_=function(e){var t=e.choices,n=e.onChange,c=Object(S.b)().t,r=t.filter((function(e){return e.value.length>0})).length>=2;return Object(L.jsxs)(d.s,{children:[Object(L.jsx)(d.v,{children:Object(L.jsx)(d.T,{as:"h3",scale:"md",children:c("Choices")})}),Object(L.jsxs)(d.t,{children:[t.map((function(e,r){var a=e.id,o=e.value;return Object(L.jsx)(Z,{scale:"lg",onTextInput:function(e){var c=Object(N.a)(t),r=c.findIndex((function(e){return e.id===a}));c[r].value=e,n(c)},placeholder:c("Input choice text"),value:o,onRemove:r>1?function(){n(t.filter((function(e){return e.id!==a})))}:void 0},a)})),Object(L.jsx)(d.o,{type:"button",onClick:function(){n([].concat(Object(N.a)(t),[Q()]))},disabled:!r,children:c("Add Choice")})]})]})},G=n(348),K=n(782),$=n(707),ee=function(e,t){if(!Object(G.default)(e)||!Object(G.default)(t))return null;var n=Object(K.default)(e,"yyyy-MM-dd"),c=Object(K.default)(t,"HH:mm:ss");return Object($.default)("".concat(n,"T").concat(c)).getTime()/1e3},te=n(806),ne=n(90),ce=n(882),re=n(881),ae=function(e){var t=e.block,n=e.onDismiss,c=Object(S.b)().t,r=Object(j.useState)(!0),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(ce.a)(t,o),l=s.isLoading,u=s.total,x=s.cakeBalance,p=s.dexTokenVaultBalance,h=s.cakePoolBalance,O=s.poolsBalance,f=s.cakeBnbLpBalance,m=Object(ne.a)().theme;return Object(L.jsx)(d.qb,{title:c("Voting Power"),onDismiss:function(){i(!1),n()},headerBackground:m.colors.gradients.cardHeader,children:Object(L.jsx)(d.l,{mb:"24px",width:"320px",children:l?Object(L.jsx)(d.R,{height:"450px",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(d.Ob,{size:80})}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(re.a,{total:u,cakeBalance:x,dexTokenVaultBalance:p,cakePoolBalance:h,poolsBalance:O,cakeBnbLpBalance:f}),Object(L.jsx)(d.o,{variant:"secondary",onClick:n,width:"100%",mt:"16px",children:c("Close")})]})})})},oe=Object(j.lazy)((function(){return Promise.all([n.e(5),n.e(18)]).then(n.bind(null,1373))}));t.default=function(){var e=Object(j.useState)({name:"",body:"",choices:O()(2).map(Q),startDate:null,startTime:null,endDate:null,endTime:null,snapshot:0}),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)(!1),a=Object(b.a)(r,2),i=a[0],h=a[1],f=Object(j.useState)({}),I=Object(b.a)(f,2),z=I[0],M=I[1],H=Object(S.b)().t,q=Object(p.c)().account,J=Object(g.b)(),W=Object(x.g)().push,U=Object(k.a)().library,Z=Object(y.a)(),K=Z.toastSuccess,$=Z.toastError,ne=Object(d.wc)(Object(L.jsx)(ae,{block:n.snapshot})),ce=Object(b.a)(ne,1)[0],re=n.name,ie=n.body,se=n.choices,le=n.startDate,ue=n.startTime,be=n.endDate,je=n.endTime,de=n.snapshot,xe=function(e,t){var n=e.name,c=e.body,r=e.choices,a=e.startDate,o=e.startTime,i=e.endDate,s=e.endTime,l=e.snapshot,u={};n||(u.name=[t("%field% is required",{field:"Title"})]),c||(u.body=[t("%field% is required",{field:"Body"})]),r.length<2&&(u.choices=[t("Please create a minimum of %num% choices",{num:2})]);var b=r.some((function(e){return!e.value}));2===r.length&&b&&(u.choices=Array.isArray(u.choices)?[].concat(Object(N.a)(u.choices),[t("Choices must not be empty")]):u.choices=[t("Choices must not be empty")]),Object(G.default)(a)||(u.startDate=[t("Please select a valid date")]),Object(G.default)(o)||(u.startTime=[t("Please select a valid time")]),Object(G.default)(i)||(u.endDate=[t("Please select a valid date")]),Object(G.default)(s)||(u.endTime=[t("Please select a valid time")]);var j=ee(a,o);return ee(i,s)<j&&(u.endDate=Array.isArray(u.endDate)?[].concat(Object(N.a)(u.endDate),[t("End date must be after the start date")]):u.endDate=[t("End date must be after the start date")]),0===l&&(u.snapshot=[t("Invalid snapshot")]),u}(n,H),pe=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h(!0),n=JSON.stringify(Object(l.a)(Object(l.a)({},Object(R.e)()),{},{type:v.c.PROPOSAL,payload:{name:re,body:ie,snapshot:de,start:ee(le,ue),end:ee(be,je),choices:se.filter((function(e){return e.value})).map((function(e){return e.value})),metadata:Object(R.d)(),type:"single-choice"}})),e.next=6,Object(B.c)(U,q,n);case 6:if(!(c=e.sent)){e.next=16;break}return r={address:q,msg:n,sig:c},e.next=11,Object(R.i)(r);case 11:a=e.sent,W("/voting/proposal/".concat(a.ipfsHash)),K(H("Proposal created!")),e.next=17;break;case 16:$(H("Error"),H("Unable to sign payload"));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),$(H("Error"),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.error)),console.error(e.t0),h(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e,t){c((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,t))})),M((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))},Oe=function(e){return function(t){he(e,t)}},fe=Object(j.useMemo)((function(){return{hideIcons:q===te.a?[]:["guide","fullscreen","preview","side-by-side","image"]}}),[q]);return Object(j.useEffect)((function(){J>0&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{snapshot:J})}))}),[J,c]),Object(L.jsxs)(C.a,{py:"40px",children:[Object(L.jsx)(d.l,{mb:"48px",children:Object(L.jsxs)(d.m,{children:[Object(L.jsx)(X.a,{to:"/",children:H("Home")}),Object(L.jsx)(X.a,{to:"/voting",children:H("Voting")}),Object(L.jsx)(d.Xb,{children:H("Make a Proposal")})]})}),Object(L.jsx)("form",{onSubmit:pe,children:Object(L.jsxs)(Y.a,{children:[Object(L.jsxs)(d.l,{children:[Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(E,{htmlFor:"name",children:H("Title")}),Object(L.jsx)(d.Z,{id:"name",name:"name",value:re,scale:"lg",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;he(n,c)},required:!0}),xe.name&&z.name&&Object(L.jsx)(V,{errors:xe.name})]}),Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(E,{htmlFor:"body",children:H("Content")}),Object(L.jsx)(d.Xb,{color:"textSubtle",mb:"8px",children:H("Tip: write in Markdown!")}),Object(L.jsx)(oe,{id:"body",name:"body",onTextChange:function(e){he("body",e)},value:ie,options:fe,required:!0}),xe.body&&z.body&&Object(L.jsx)(V,{errors:xe.body})]}),ie&&Object(L.jsx)(d.l,{mb:"24px",children:Object(L.jsxs)(d.s,{children:[Object(L.jsx)(d.v,{children:Object(L.jsx)(d.T,{as:"h3",scale:"md",children:H("Preview")})}),Object(L.jsx)(d.t,{p:"0",px:"24px",children:Object(L.jsx)(A.a,{children:ie})})]})}),Object(L.jsx)(_,{choices:se,onChange:function(e){he("choices",e)}}),xe.choices&&z.choices&&Object(L.jsx)(V,{errors:xe.choices})]}),Object(L.jsx)(d.l,{children:Object(L.jsxs)(d.s,{children:[Object(L.jsx)(d.v,{children:Object(L.jsx)(d.T,{as:"h3",scale:"md",children:H("Actions")})}),Object(L.jsxs)(d.t,{children:[Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(F,{children:H("Start Date")}),Object(L.jsx)(D.a,{name:"startDate",onChange:Oe("startDate"),selected:le,placeholderText:"YYYY/MM/DD"}),xe.startDate&&z.startDate&&Object(L.jsx)(V,{errors:xe.startDate})]}),Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(F,{children:H("Start Time")}),Object(L.jsx)(D.c,{name:"startTime",onChange:Oe("startTime"),selected:ue,placeholderText:"00:00"}),xe.startTime&&z.startTime&&Object(L.jsx)(V,{errors:xe.startTime})]}),Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(F,{children:H("End Date")}),Object(L.jsx)(D.a,{name:"endDate",onChange:Oe("endDate"),selected:be,placeholderText:"YYYY/MM/DD"}),xe.endDate&&z.endDate&&Object(L.jsx)(V,{errors:xe.endDate})]}),Object(L.jsxs)(d.l,{mb:"24px",children:[Object(L.jsx)(F,{children:H("End Time")}),Object(L.jsx)(D.c,{name:"endTime",onChange:Oe("endTime"),selected:je,placeholderText:"00:00"}),xe.endTime&&z.endTime&&Object(L.jsx)(V,{errors:xe.endTime})]}),q&&Object(L.jsxs)(d.R,{alignItems:"center",mb:"8px",children:[Object(L.jsx)(d.Xb,{color:"textSubtle",mr:"16px",children:H("Creator")}),Object(L.jsx)(d.db,{href:Object(w.e)(q,"address"),children:Object(T.a)(q)})]}),Object(L.jsxs)(d.R,{alignItems:"center",mb:"16px",children:[Object(L.jsx)(d.Xb,{color:"textSubtle",mr:"16px",children:H("Snapshot")}),Object(L.jsx)(d.db,{href:Object(w.e)(de,"block"),children:de})]}),q?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.o,{type:"submit",width:"100%",isLoading:i,endIcon:i?Object(L.jsx)(d.h,{spin:!0,color:"currentColor"}):null,disabled:!m()(xe),mb:"16px",children:H("Publish")}),Object(L.jsxs)(d.Xb,{color:"failure",as:"p",mb:"4px",children:[H("You need at least %count% voting power to publish a proposal.",{count:te.f})," "]}),Object(L.jsx)(d.o,{scale:"sm",type:"button",variant:"text",onClick:ce,p:0,children:H("Check voting power")})]}):Object(L.jsx)(P.a,{width:"100%",type:"button"})]})]})})]})})]})}},804:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},805:function(e,t,n){"use strict";n.d(t,"h",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return T}));var c=n(21),r=n(41),a=n(6),o=n(3),i=n.n(o),s=n(12),l=n(14),u=n.n(l),b=n(18),j=n(121),d=n(22),x=n(112),p=n(92),h=n(806),O=function(e){return e.author.toLowerCase()===h.a.toLowerCase()},f=function(e,t){switch(t){case x.b.COMMUNITY:return e.filter((function(e){return!O(e)}));case x.b.CORE:return e.filter((function(e){return O(e)}));case x.b.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"Scaryswap",params:{symbol:"SCARY",address:Object(b.f)(),decimals:18}}]}},v=function(){return{version:h.e,timestamp:(Date.now()/1e3).toFixed(),space:h.c}},y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.d,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(j.e,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},T=function(e){return e.reduce((function(e,t){var n,c=new u.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},806:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",a="https://gateway.ipfs.io/ipfs",o="0.1.3",i="cake.eth",s=10},857:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var c,r=n(6),a=n(7),o=(n(1),n(2)),i=n(4),s=n(0),l=i.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),u=function(e){return Object(s.jsx)(o.l,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},867:function(e,t,n){"use strict";var c,r=n(7),a=n(66),o=n(4),i=Object(o.e)(a.a)(c||(c=Object(r.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryBright}));t.a=i},880:function(e,t,n){"use strict";var c,r=n(7),a=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},881:function(e,t,n){"use strict";n(1);var c=n(2),r=n(13),a=n(857),o=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.dexTokenVaultBalance,s=e.cakePoolBalance,l=e.poolsBalance,u=e.cakeBnbLpBalance,b=Object(r.b)().t;return Object(o.jsxs)(a.a,{mb:"0",children:[Object(o.jsx)(c.Xb,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:b("Your voting power is determined by the amount of SCARY you held at the block detailed below. SCARY held in other places does not contribute to your voting power.")}),Object(o.jsx)(c.Xb,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Overview")}),Object(o.jsxs)(a.b,{children:[Object(o.jsx)(c.Xb,{color:"secondary",children:b("Your Voting Power")}),Object(o.jsx)(c.Xb,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(o.jsx)(c.Xb,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Your Cake Held Now")}),Object(o.jsxs)(c.R,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:b("Wallet")}),Object(o.jsx)(c.Xb,{textAlign:"right",children:n.toFormat(3)})]}),Object(o.jsxs)(c.R,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:b("Manual SCARY Pool")}),Object(o.jsx)(c.Xb,{textAlign:"right",children:s.toFormat(3)})]}),Object(o.jsxs)(c.R,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:b("Auto SCARY Pool")}),Object(o.jsx)(c.Xb,{textAlign:"right",children:i.toFormat(3)})]}),Object(o.jsxs)(c.R,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:b("Other Amazon Pools")}),Object(o.jsx)(c.Xb,{textAlign:"right",children:l.toFormat(3)})]}),Object(o.jsxs)(c.R,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:b("SCARY BNB LP")}),Object(o.jsx)(c.Xb,{textAlign:"right",children:u.toFormat(3)})]})]})}},882:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(6),o=n(12),i=n(8),s=n(1),l=n(37),u=n(22),b=n(186),j=n(18),d=n(92),x=n(14),p=n.n(x),h=n(805),O={verificationHash:null,cakeBalance:u.d,dexTokenVaultBalance:u.d,cakePoolBalance:u.d,poolsBalance:u.d,cakeBnbLpBalance:u.d,total:u.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,u=Object(s.useState)(O),x=Object(i.a)(u,2),f=x[0],m=x[1],g=Object(s.useState)(!!c),v=Object(i.a)(g,2),y=v[0],k=v[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,i,s,l,u,x,O,f,g,v,y;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(h.g)(c,s,o);case 14:l=n.sent,u=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,f=l.total,g=l.poolsBalance,v=l.dexTokenVaultBalance,y=l.verificationHash,t&&m((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:y,cakeBalance:new p.a(u),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(O),poolsBalance:new p.a(g),dexTokenVaultBalance:new p.a(v),total:new p.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(a.a)(Object(a.a)({},f),{},{isLoading:y})}},915:function(e,t,n){"use strict";var c,r,a,o=n(6),i=(n(1),n(922)),s=n.n(i),l=n(958),u=n.n(l),b=n(7),j=n(2),d=n(4),x=n(0),p=d.e.table(c||(c=Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=d.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=function(e){return Object(x.jsx)(j.T,Object(o.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:O,h2:O,h3:O,h4:O,h5:O,h6:O,p:function(e){return Object(x.jsx)(j.Xb,Object(o.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(h,Object(o.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(h,Object(o.a)({as:"ul"},e))},pre:d.e.pre(a||(a=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(s.a,Object(o.a)({remarkPlugins:[u.a],components:f},e))}}}]);
//# sourceMappingURL=8.d9ac850c.chunk.js.map