(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[32],{1381:function(e,t,n){"use strict";n.r(t);var c,a,r,s,i,o,b,u,l=n(1),j=n(13),d=n(74),O=n(242),m=n(39),p=n(6),x=n(3),f=n.n(x),h=n(12),g=n(8),v=n(153),w=n(120),y=n(319),k=n(58),S=n(18),N=function(){var e=Object(w.a)().fastRefresh,t=Object(l.useState)({status:-2,costPresaleBNB:-2,costPresaleETH:-2,listingPrice:-2,softcap:-2,hardcap:-2,decimals:-2,name:"",symbol:"",link:"",logolink:"",headerlogo:"",isWhitelistOn:!1,maxUserAmount:-2,startPresaleTime:-2,endPresaleTime:-2,paused:!0,ILOToken:""}),n=Object(g.a)(t,2),c=n[0],a=n[1],r=(Object(v.a)().currentBlock,Object(S.n)()),s=Object(l.useCallback)(Object(h.a)(f.a.mark((function e(){var t,n,c,s,i,o,b,u,l,j,d,O,m,p,x,h,v,w,S,N,T;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["status","costPresaleBNB","costPresaleETH","listingPrice","softcap","hardcap","decimals","name","symbol","link","logolink","headerlogo","isWhitelistOn","maxUserAmount","startPresaleTime","endPresaleTime","paused","ILOToken"].map((function(e){return{address:r,name:e}})),e.next=3,Object(k.b)(y,t);case 3:n=e.sent,c=Object(g.a)(n,18),s=c[0],i=c[1],o=c[2],b=c[3],u=c[4],l=c[5],j=c[6],d=c[7],O=c[8],m=c[9],p=c[10],x=c[11],h=c[12],v=c[13],w=c[14],S=c[15],N=c[16],T=c[17],a((function(e){return{status:s,costPresaleBNB:i,costPresaleETH:o,listingPrice:b,softcap:u,hardcap:l,decimals:j,name:d,symbol:O,link:m,logolink:p,headerlogo:x,isWhitelistOn:h,maxUserAmount:v,startPresaleTime:w,endPresaleTime:S,paused:N,ILOToken:T}}));case 24:case"end":return e.stop()}}),e)}))),[r]);return Object(l.useEffect)((function(){s()}),[s,e]),Object(p.a)({},c)},T=n(7),P=n(4),I=n(2),B=n(38),C=n(66),D=n(21),A=n(63),E=(n(48),n(30)),Y=n(40),L=n(14),F=n.n(L),W=n(0),U=function(e){var t=e.publicIfoData,n=Object(B.c)().account,c=Object(j.b)().t,a=Object(I.yc)(c("Sorry,  You didn't buy anything in this sale."),{placement:"bottom"}),r=(a.targetRef,a.tooltip),s=a.tooltipVisible,i=Object(Y.n)(Object(S.n)()),o=Object(l.useState)("0"),b=Object(g.a)(o,2),u=(b[0],b[1]),d=Object(l.useState)("0"),O=Object(g.a)(d,2),m=(O[0],O[1]);Object(l.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.bnbCommitted(n);case 2:c=e.sent,a=Object(E.f)(new F.a(c.toString()),9,3),console.log(c,a),u("NaN"===a?"0":a),console.log((c/t.costPresaleBNB).toString()),m("NaN"===(c/t.costPresaleBNB).toString()?"0":(c/t.costPresaleBNB).toFixed(2).toString());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n,i,t]);return Object(W.jsxs)(I.l,{pb:"24px",children:[s&&r,-1!==t.status?Object(W.jsx)(W.Fragment,{}):null]})},R=n(93),q=n(117),H=n(35),X=function(e){e.currency;var t=e.onDismiss,n=Object(j.b)().t;return Object(W.jsx)(I.qb,{title:n("BNB required"),onDismiss:t,children:Object(W.jsx)(I.sb,{maxWidth:"288px",children:Object(W.jsx)(I.Xb,{mb:"16px",children:n("You'll need BNB to participate in the IFO!")})})})},z=n(70),J=n(22),Q=[.1,.25,.5,.75,1],V=(J.c.times(J.c.pow(J.a)).toString(),function(e){var t=e.publicIfoData,n=e.onDismiss,c=(e.onSuccess,Object(l.useState)("")),a=Object(g.a)(c,2),r=a[0],s=a[1],i=Object(B.c)().account,o=Object(q.e)().balance,b=Object(C.a)(),u=b.toastError,d=b.toastSuccess;console.log(o);var O=Object(Y.n)(Object(S.n)()),m=Object(Y.i)(H.i.scy.address[56]),p=Object(j.b)().t,x=(new F.a(r).times(z.j),Object(l.useState)(!1)),v=Object(g.a)(x,2),w=v[0],y=v[1],k=Object(l.useState)(1),N=Object(g.a)(k,2),T=N[0],P=N[1],D=Object(l.useState)(0),A=Object(g.a)(D,2),L=A[0],U=A[1];return Object(W.jsx)(I.qb,{title:p("",{}),onDismiss:n,children:Object(W.jsxs)(I.sb,{maxWidth:"350px",children:[Object(W.jsx)(I.i,{value:r,onUserInput:function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(n),y(Number(Object(E.e)(new F.a(n),9))<Number(t.costPresaleETH)),e.t0=U,e.next=5,m.allowance(i,Object(S.n)());case 5:e.t1=e.sent,(0,e.t0)(e.t1),console.log(Number(L)," ----- ",Number(Object(E.e)(new F.a(n),9))),Number(L)>=Number(Object(E.e)(new F.a(n),9))?P(2):P(1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),mb:"8px"}),Object(W.jsx)(I.Xb,{color:"textSubtle",textAlign:"right",fontSize:"12px",mb:"16px",children:p("Balance: ")+Object(E.f)(o,9,6)}),Object(W.jsx)(I.R,{justifyContent:"space-between",mb:"16px",children:Q.map((function(e,t){return Object(W.jsxs)(I.o,{scale:"xs",variant:"tertiary",onClick:function(){return s((Number(Object(E.f)(o,9,6))*e).toString())},mr:t<Q.length-1?"8px":0,children:[100*e,"%"]},e)}))}),Object(W.jsx)(I.Xb,{color:"textSubtle",fontSize:"12px",mb:"24px",children:p("If you don't commit enough SCY, you may not receive any ILO tokens at all and will only receive a full refund of your SCY.")}),Object(W.jsx)(I.o,{display:1===T?"block":"none",disabled:w,onClick:Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.toLowerCase()!=="0xfe77839e7279d7c454a5ed68770f0fdd07520ebf".toLowerCase()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,m.approve(Object(S.n)(),Object(E.e)(new F.a(r),9).toString());case 5:return t=e.sent,e.next=8,t.wait();case 8:e.sent.status&&(d(p("Approve"),p("SCY is approved")),P(2)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),u(p("Error"),p("You are not allowed to buy."));case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),children:"Approve"}),Object(W.jsx)(I.o,{display:2===T?"block":"none",disabled:w,onClick:Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(r),i.toLowerCase()!=="0xfe77839e7279d7c454a5ed68770f0fdd07520ebf".toLowerCase()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,O.buyETH(Object(E.e)(new F.a(r),9).toString());case 6:return t=e.sent,e.next=9,t.wait();case 9:e.sent.status&&(d(p("Token Received"),p("Scary token received successfully")),n()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),u(p("Error"),p("You are not allowed to buy."));case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:"Buy"})]})})}),G=function(e){var t=e.publicIfoData,n=(t.maxUserAmount,Object(j.b)().t),c=Object(C.a)().toastSuccess,a=Object(q.c)().balance,r=Object(B.c)().account,s=Object(Y.n)(Object(S.n)()),i=Object(l.useState)(!1),o=Object(g.a)(i,2),b=o[0],u=o[1],d=Number(((new Date).getTime()/1e3).toFixed(0)),O=d<Number(t.startPresaleTime)?Number(t.startPresaleTime)-d:d<Number(t.endPresaleTime)?Number(t.endPresaleTime)-d:0;Object(l.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.isWhitelistOn[0]),!t.isWhitelistOn[0]){e.next=7;break}return console.log("asdasd"),e.next=5,s.isInList(r);case 5:"true"===e.sent.toString()&&u(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,s,t]);var m=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(n("Success!"),n("You have contributed to this IFO!"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=Object(I.wc)(Object(W.jsx)(V,{publicIfoData:t,onSuccess:m}),!1),x=Object(g.a)(p,1)[0],v=Object(I.wc)(Object(W.jsx)(X,{currency:H.i.wbnb}),!1),w=Object(g.a)(v,1)[0];return d>Number(t.startPresaleTime)&&O>0&&(!t.isWhitelistOn[0]||b)?Object(W.jsx)(I.o,{onClick:a.isEqualTo(0)?w:x,width:"100%",children:"Buy SCARY with SCY"}):(console.log("asda",d-Number(t.startPresaleTime),O),d>Number(t.startPresaleTime)&&O>0?Object(W.jsx)("div",{style:{textAlign:"center"},children:"Sorry you are not whitelisted."}):Object(W.jsx)(I.o,{disabled:!0,onClick:a.isEqualTo(0)?w:x,width:"100%",children:"Buy SCARY with SCY"}))},K=function(e){var t=e.publicIfoData;Object(j.b)().t;return Object(B.c)().account?Object(W.jsx)(W.Fragment,{children:-1!==t.status&&Object(W.jsxs)("div",{style:{margin:"auto",maxWidth:"250px"},children:[Object(W.jsx)("br",{}),Object(W.jsx)(G,{publicIfoData:t})]})}):Object(W.jsx)(R.a,{width:"100%"})},M=n(37),Z=function(){return Object(W.jsxs)("div",{children:[Object(W.jsx)(I.Lb,{mb:"8px"}),Object(W.jsx)(I.Lb,{})]})},$=function(e){var t=e.label,n=e.value;return Object(W.jsxs)(I.R,{justifyContent:"space-between",alignItems:"center",children:[Object(W.jsx)(I.Xb,{small:!0,color:"textSubtle",children:t}),n?Object(W.jsx)(I.Xb,{small:!0,textAlign:"right",children:n}):Object(W.jsx)(I.Lb,{height:21,width:80})]})},_=function(e){var t=e.publicIfoData,n=Object(j.b)().t,c=Number(t.status);Object(M.q)(Object(S.n)());return-2!==c?(console.log(t.maxUserAmount.toString()),Object(W.jsx)(I.l,{paddingTop:"24px",children:Object(W.jsx)($,{label:n("Scary Per SCY:"),value:(1e9/t.costPresaleETH).toFixed(0).concat(" ").concat(t.symbol.toString())})})):Object(W.jsx)(I.l,{paddingTop:"24px",children:Object(W.jsx)(Z,{})})},ee=(c={},Object(D.a)(c,A.e.poolBasic,{title:"Basic Sale",variant:"blue",tooltip:"Every person can only commit a limited amount, but may expect a higher return per token committed."}),Object(D.a)(c,A.e.poolUnlimited,{title:"Unlimited Sale",variant:"violet",tooltip:"No limits on the amount you can commit. Additional fee applies when claiming."}),function(e){var t=e.publicIfoData;Object(j.b)().t;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(I.s,{children:Object(W.jsxs)(I.t,{children:[Object(W.jsx)(U,{publicIfoData:t}),Object(W.jsx)(K,{publicIfoData:t}),Object(W.jsx)(_,{publicIfoData:t})]})})})}),te=(Object(P.e)(I.s)(a||(a=Object(T.a)(["\n  max-width: 736px;\n  width: 100%;\n  margin: auto;\n  \n"]))),Object(P.e)(I.v)(r||(r=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 112px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background:#000000;\n"]))),P.e.div(s||(s=Object(T.a)(["\n  display: block;\n  background: ",";\n"])),(function(e){var t=e.isActive,n=e.theme;return t?n.colors.gradients.bubblegum:n.colors.dropdown})),P.e.div(i||(i=Object(T.a)(["\n \n  max-width: 700px;\n  width:100%;\n  margin: auto;\n  justify-items: 'center';\n  "," {\n    margin-left: 25%;\n    margin-right: 25%;\n    justify-items: ",";\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.singleCard?"center":"unset"}))),ne=(Object(P.e)(I.t)(o||(o=Object(T.a)(["\n  padding: 14px 8px;\n  background: rgba(256,256,256,0);\n  "," {\n    padding: 14px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Object(P.e)(I.u)(b||(b=Object(T.a)(["\n  text-align: center;\n  padding: 8px;\n  background: ",";\n"])),(function(e){return e.theme.colors.backgroundAlt})),function(e){var t=e.publicIfoData,n=Object(j.b)().t,c=(Object(B.c)().account,Number(((new Date).getTime()/1e3).toFixed(0))),a=c<Number(t.startPresaleTime)?Number(t.startPresaleTime)-c:c<Number(t.endPresaleTime)?c-Number(t.endPresaleTime):0;(function(e,t){"cancelled"===e?(I.w,t(e)):(I.w,"".concat(t(e),"!"))})(0!==a&&-1===Number(t.status)?"cancelled":c<Number(t.startPresaleTime)&&0===Number(t.status)?"coming soon":0!==a&&0===Number(t.status)||0!==a&&1===Number(t.status)?"live":0===a||2===Number(t.status)?"finished":"",n),2!==t.status&&t.status,Object(C.a)().toastSuccess;return Object(W.jsx)(te,{singleCard:!0,children:Object(W.jsx)(ee,{publicIfoData:t})})}),ce=P.e.div(u||(u=Object(T.a)(["\n  display: flex;\n  justify-Items:center;\n  padding: 40px 0;\n  \n"]))),ae=(m.x.find((function(e){return e.isActive})),function(){var e=N();return-2!==e.status?Object(W.jsx)(ce,{children:Object(W.jsx)(ne,{publicIfoData:e})}):Object(W.jsx)(ce,{})});t.default=function(){Object(j.b)().t;var e=Object(d.j)(),t=e.path;e.url,e.isExact;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(O.a,{children:Object(W.jsx)(d.b,{exact:!0,path:"".concat(t),children:Object(W.jsx)(ae,{})})})})}}}]);
//# sourceMappingURL=32.5d6a8b1e.chunk.js.map