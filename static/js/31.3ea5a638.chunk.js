(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[31],{1382:function(e,t,n){"use strict";n.r(t);var c,a,r,s,i,o,b,u,l=n(1),j=n(13),d=n(74),O=n(242),m=n(39),p=n(6),x=n(3),f=n.n(x),h=n(12),g=n(8),v=n(153),w=n(120),N=n(319),y=n(58),k=n(18),S=function(){var e=Object(w.a)().fastRefresh,t=Object(l.useState)({status:-2,costPresaleBNB:-2,costPresaleETH:-2,listingPrice:-2,softcap:-2,hardcap:-2,decimals:-2,name:"",symbol:"",link:"",logolink:"",headerlogo:"",isWhitelistOn:!1,maxUserAmount:-2,startPresaleTime:-2,endPresaleTime:-2,paused:!0,ILOToken:""}),n=Object(g.a)(t,2),c=n[0],a=n[1],r=(Object(v.a)().currentBlock,Object(k.o)()),s=Object(l.useCallback)(Object(h.a)(f.a.mark((function e(){var t,n,c,s,i,o,b,u,l,j,d,O,m,p,x,h,v,w,k,S,T;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["status","costPresaleBNB","costPresaleETH","listingPrice","softcap","hardcap","decimals","name","symbol","link","logolink","headerlogo","isWhitelistOn","maxUserAmount","startPresaleTime","endPresaleTime","paused","ILOToken"].map((function(e){return{address:r,name:e}})),e.next=3,Object(y.b)(N,t);case 3:n=e.sent,c=Object(g.a)(n,18),s=c[0],i=c[1],o=c[2],b=c[3],u=c[4],l=c[5],j=c[6],d=c[7],O=c[8],m=c[9],p=c[10],x=c[11],h=c[12],v=c[13],w=c[14],k=c[15],S=c[16],T=c[17],a((function(e){return{status:s,costPresaleBNB:i,costPresaleETH:o,listingPrice:b,softcap:u,hardcap:l,decimals:j,name:d,symbol:O,link:m,logolink:p,headerlogo:x,isWhitelistOn:h,maxUserAmount:v,startPresaleTime:w,endPresaleTime:k,paused:S,ILOToken:T}}));case 24:case"end":return e.stop()}}),e)}))),[r]);return Object(l.useEffect)((function(){s()}),[s,e]),Object(p.a)({},c)},T=n(7),P=n(4),B=n(2),D=n(38),I=n(66),A=n(21),E=n(63),C=(n(48),n(30)),R=n(40),L=n(14),F=n.n(L),G=n(0),W=function(e){var t=e.publicIfoData,n=Object(D.c)().account,c=Object(j.b)().t,a=Object(B.yc)(c("Sorry,  You didn't buy anything in this sale."),{placement:"bottom"}),r=(a.targetRef,a.tooltip),s=a.tooltipVisible,i=Object(R.o)(Object(k.o)()),o=Object(l.useState)("0"),b=Object(g.a)(o,2),u=(b[0],b[1]),d=Object(l.useState)("0"),O=Object(g.a)(d,2),m=(O[0],O[1]);Object(l.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.bnbCommitted(n);case 2:c=e.sent,a=Object(C.f)(new F.a(c.toString()),9,3),console.log(c,a),u("NaN"===a?"0":a),console.log((c/t.costPresaleBNB).toString()),m("NaN"===(c/t.costPresaleBNB).toString()?"0":(c/t.costPresaleBNB).toFixed(2).toString());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n,i,t]);return Object(G.jsxs)(B.l,{pb:"24px",children:[s&&r,-1!==t.status?Object(G.jsx)(G.Fragment,{}):null]})},U=n(93),H=n(117),$=n(35),q=function(e){e.currency;var t=e.onDismiss,n=Object(j.b)().t;return Object(G.jsx)(B.qb,{title:n("BNB required"),onDismiss:t,children:Object(G.jsx)(B.sb,{maxWidth:"288px",children:Object(G.jsx)(B.Xb,{mb:"16px",children:n("You'll need BNB to participate in the IFO!")})})})},X=n(70),Y=n(22),z=[.1,.25,.5,.75,1],J=(Y.c.times(Y.c.pow(Y.a)).toString(),function(e){var t=e.publicIfoData,n=e.onDismiss,c=(e.onSuccess,Object(l.useState)("")),a=Object(g.a)(c,2),r=a[0],s=a[1],i=Object(D.c)().account,o=Object(H.f)().balance,b=Object(I.a)(),u=b.toastError,d=b.toastSuccess;console.log(o);var O=Object(R.o)(Object(k.o)()),m=Object(R.i)($.i.dragon.address[56]),p=Object(j.b)().t,x=(new F.a(r).times(X.j),Object(l.useState)(!1)),v=Object(g.a)(x,2),w=v[0],N=v[1],y=Object(l.useState)(1),S=Object(g.a)(y,2),T=S[0],P=S[1],A=Object(l.useState)(0),E=Object(g.a)(A,2),L=E[0],W=E[1];return Object(G.jsx)(B.qb,{title:p("",{}),onDismiss:n,children:Object(G.jsxs)(B.sb,{maxWidth:"350px",children:[Object(G.jsx)(B.i,{value:r,onUserInput:function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(n),N(Number(Object(C.e)(new F.a(n),9))<Number(t.costPresaleETH)),e.t0=W,e.next=5,m.allowance(i,Object(k.o)());case 5:e.t1=e.sent,(0,e.t0)(e.t1),console.log(Number(L)," ----- ",Number(Object(C.e)(new F.a(n),9))),Number(L)>=Number(Object(C.e)(new F.a(n),9))?P(2):P(1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),mb:"8px"}),Object(G.jsx)(B.Xb,{color:"textSubtle",textAlign:"right",fontSize:"12px",mb:"16px",children:p("Balance: ")+Object(C.f)(o,9,6)}),Object(G.jsx)(B.R,{justifyContent:"space-between",mb:"16px",children:z.map((function(e,t){return Object(G.jsxs)(B.o,{scale:"xs",variant:"tertiary",onClick:function(){return s((Number(Object(C.f)(o,9,6))*e).toString())},mr:t<z.length-1?"8px":0,children:[100*e,"%"]},e)}))}),Object(G.jsx)(B.Xb,{color:"textSubtle",fontSize:"12px",mb:"24px",children:p("If you don't commit enough $DRAGONS, you may not receive any ILO tokens at all and will only receive a full refund of your $DRAGONS.")}),Object(G.jsx)(B.o,{display:1===T?"block":"none",disabled:w,onClick:Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.toLowerCase()!=="0xfe77839e7279d7c454a5ed68770f0fdd07520ebf".toLowerCase()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,m.approve(Object(k.o)(),Object(C.e)(new F.a(r),9).toString());case 5:return t=e.sent,e.next=8,t.wait();case 8:e.sent.status&&(d(p("Approve"),p("$DRAGONS is approved")),P(2)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),u(p("Error"),p("You are not allowed to buy."));case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),children:"Approve"}),Object(G.jsx)(B.o,{display:2===T?"block":"none",disabled:w,onClick:Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(r),i.toLowerCase()!=="0xfe77839e7279d7c454a5ed68770f0fdd07520ebf".toLowerCase()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,O.buyETH(Object(C.e)(new F.a(r),9).toString());case 6:return t=e.sent,e.next=9,t.wait();case 9:e.sent.status&&(d(p("Token Received"),p("BNBDRAGON token received successfully")),n()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),u(p("Error"),p("You are not allowed to buy."));case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:"Buy"})]})})}),Q=function(e){var t=e.publicIfoData,n=(t.maxUserAmount,Object(j.b)().t),c=Object(I.a)().toastSuccess,a=Object(H.c)().balance,r=Object(D.c)().account,s=Object(R.o)(Object(k.o)()),i=Object(l.useState)(!1),o=Object(g.a)(i,2),b=o[0],u=o[1],d=Number(((new Date).getTime()/1e3).toFixed(0)),O=d<Number(t.startPresaleTime)?Number(t.startPresaleTime)-d:d<Number(t.endPresaleTime)?Number(t.endPresaleTime)-d:0;Object(l.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.isWhitelistOn[0]),!t.isWhitelistOn[0]){e.next=7;break}return console.log("asdasd"),e.next=5,s.isInList(r);case 5:"true"===e.sent.toString()&&u(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,s,t]);var m=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(n("Success!"),n("You have contributed to this IFO!"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=Object(B.wc)(Object(G.jsx)(J,{publicIfoData:t,onSuccess:m}),!1),x=Object(g.a)(p,1)[0],v=Object(B.wc)(Object(G.jsx)(q,{currency:$.i.wbnb}),!1),w=Object(g.a)(v,1)[0];return d>Number(t.startPresaleTime)&&O>0&&(!t.isWhitelistOn[0]||b)?Object(G.jsx)(B.o,{onClick:a.isEqualTo(0)?w:x,width:"100%",children:"Buy BNBDRAGON with $DRAGONS"}):(console.log("asda",d-Number(t.startPresaleTime),O),d>Number(t.startPresaleTime)&&O>0?Object(G.jsx)("div",{style:{textAlign:"center"},children:"Sorry you are not whitelisted."}):Object(G.jsx)(B.o,{disabled:!0,onClick:a.isEqualTo(0)?w:x,width:"100%",children:"Buy BNBDRAGON with $DRAGONS"}))},V=function(e){var t=e.publicIfoData;Object(j.b)().t;return Object(D.c)().account?Object(G.jsx)(G.Fragment,{children:-1!==t.status&&Object(G.jsxs)("div",{style:{margin:"auto",maxWidth:"250px"},children:[Object(G.jsx)("br",{}),Object(G.jsx)(Q,{publicIfoData:t})]})}):Object(G.jsx)(U.a,{width:"100%"})},K=n(37),M=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(B.Lb,{mb:"8px"}),Object(G.jsx)(B.Lb,{})]})},Z=function(e){var t=e.label,n=e.value;return Object(G.jsxs)(B.R,{justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(B.Xb,{small:!0,color:"textSubtle",children:t}),n?Object(G.jsx)(B.Xb,{small:!0,textAlign:"right",children:n}):Object(G.jsx)(B.Lb,{height:21,width:80})]})},_=function(e){var t=e.publicIfoData,n=Object(j.b)().t,c=Number(t.status);Object(K.r)(Object(k.o)());return-2!==c?(console.log(t.maxUserAmount.toString()),Object(G.jsx)(B.l,{paddingTop:"24px",children:Object(G.jsx)(Z,{label:n("BNBDRAGON Per $DRAGONS:"),value:(1e9/t.costPresaleETH).toFixed(0).concat(" ").concat(t.symbol.toString())})})):Object(G.jsx)(B.l,{paddingTop:"24px",children:Object(G.jsx)(M,{})})},ee=(c={},Object(A.a)(c,E.e.poolBasic,{title:"Basic Sale",variant:"blue",tooltip:"Every person can only commit a limited amount, but may expect a higher return per token committed."}),Object(A.a)(c,E.e.poolUnlimited,{title:"Unlimited Sale",variant:"violet",tooltip:"No limits on the amount you can commit. Additional fee applies when claiming."}),function(e){var t=e.publicIfoData;Object(j.b)().t;return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(B.s,{children:Object(G.jsxs)(B.t,{children:[Object(G.jsx)(W,{publicIfoData:t}),Object(G.jsx)(V,{publicIfoData:t}),Object(G.jsx)(_,{publicIfoData:t})]})})})}),te=(Object(P.e)(B.s)(a||(a=Object(T.a)(["\n  max-width: 736px;\n  width: 100%;\n  margin: auto;\n  \n"]))),Object(P.e)(B.v)(r||(r=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 112px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background:#000000;\n"]))),P.e.div(s||(s=Object(T.a)(["\n  display: block;\n  background: ",";\n"])),(function(e){var t=e.isActive,n=e.theme;return t?n.colors.gradients.bubblegum:n.colors.dropdown})),P.e.div(i||(i=Object(T.a)(["\n \n  max-width: 700px;\n  width:100%;\n  margin: auto;\n  justify-items: 'center';\n  "," {\n    margin-left: 25%;\n    margin-right: 25%;\n    justify-items: ",";\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.singleCard?"center":"unset"}))),ne=(Object(P.e)(B.t)(o||(o=Object(T.a)(["\n  padding: 14px 8px;\n  background: rgba(256,256,256,0);\n  "," {\n    padding: 14px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Object(P.e)(B.u)(b||(b=Object(T.a)(["\n  text-align: center;\n  padding: 8px;\n  background: ",";\n"])),(function(e){return e.theme.colors.backgroundAlt})),function(e){var t=e.publicIfoData,n=Object(j.b)().t,c=(Object(D.c)().account,Number(((new Date).getTime()/1e3).toFixed(0))),a=c<Number(t.startPresaleTime)?Number(t.startPresaleTime)-c:c<Number(t.endPresaleTime)?c-Number(t.endPresaleTime):0;(function(e,t){"cancelled"===e?(B.w,t(e)):(B.w,"".concat(t(e),"!"))})(0!==a&&-1===Number(t.status)?"cancelled":c<Number(t.startPresaleTime)&&0===Number(t.status)?"coming soon":0!==a&&0===Number(t.status)||0!==a&&1===Number(t.status)?"live":0===a||2===Number(t.status)?"finished":"",n),2!==t.status&&t.status,Object(I.a)().toastSuccess;return Object(G.jsx)(te,{singleCard:!0,children:Object(G.jsx)(ee,{publicIfoData:t})})}),ce=P.e.div(u||(u=Object(T.a)(["\n  display: flex;\n  justify-Items:center;\n  padding: 40px 0;\n  \n"]))),ae=(m.x.find((function(e){return e.isActive})),function(){var e=S();return-2!==e.status?Object(G.jsx)(ce,{children:Object(G.jsx)(ne,{publicIfoData:e})}):Object(G.jsx)(ce,{})});t.default=function(){Object(j.b)().t;var e=Object(d.j)(),t=e.path;e.url,e.isExact;return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(O.a,{children:Object(G.jsx)(d.b,{exact:!0,path:"".concat(t),children:Object(G.jsx)(ae,{})})})})}}}]);
//# sourceMappingURL=31.3ea5a638.chunk.js.map