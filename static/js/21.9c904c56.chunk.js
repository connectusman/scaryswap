(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1385:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,b,d,j,u,f,O,p,x,h=n(7),m=n(1),v=n(4),g=n(2),w=n(13),k=n(127),y=n(192),C=n.n(y),S=n(37),I=n(155),T=n(69),N=n(371),F=n(832),P=n(3),X=n.n(P),A=n(12),D=n(8),E=n(184),L=v.e.div(r||(r=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),W=n(82),q=n(246),z=n(65),J=n(39),Q=n(0),R=Object(v.e)(g.Xb)(c||(c=Object(h.a)(["\n  font-weight: 600;\n"]))),U=v.e.div(a||(a=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),V=v.e.div(i||(i=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),_=v.e.label(s||(s=Object(h.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),B=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(m.useState)(""),b=Object(D.a)(l,2),d=b[0],j=b[1],u=Object(m.useState)(null),f=Object(D.a)(u,2),O=f[0],p=f[1],x=Object(w.b)().t,h=Object(S.c)().account,v=Object(J.j)(Object(q.a)(t.type)),k=Object(z.a)().toastSuccess,y=function(){var e=Object(A.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,W.a.utils.isAddress(d)){e.next=6;break}p(x("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,v.transferFrom(h,d,n[0]);case 8:return t=e.sent,o(!0),e.next=12,t.wait();case 12:e.sent.status?(c(),r(),k(x("NFT successfully transferred!"))):(p(x("Unable to transfer NFT")),o(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(g.qb,{title:x("Transfer NFT"),onDismiss:c,children:[Object(Q.jsxs)(U,{children:[O&&Object(Q.jsx)(g.Xb,{color:"failure",mb:"8px",children:O}),Object(Q.jsxs)(L,{children:[Object(Q.jsxs)(g.Xb,{children:[x("Transferring"),":"]}),Object(Q.jsx)(R,{children:x("1x %nftName% NFT",{nftName:t.name})})]}),Object(Q.jsxs)(_,{htmlFor:"transferAddress",children:[x("Receiving address"),":"]}),Object(Q.jsx)(g.Z,{id:"transferAddress",name:"address",type:"text",placeholder:x("Paste address"),value:d,onChange:function(e){var t=e.target.value;j(t)},isWarning:O,disabled:s})]}),Object(Q.jsxs)(V,{children:[Object(Q.jsx)(g.o,{width:"100%",variant:"secondary",onClick:c,children:x("Cancel")}),Object(Q.jsx)(g.o,{width:"100%",onClick:y,disabled:!h||s||!d,children:x("Confirm")})]})]})},Y=v.e.div(o||(o=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),Z=v.e.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),G=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(w.b)().t,b=Object(S.c)().account,d=Object(z.a)(),j=d.toastError,u=d.toastSuccess,f=function(){var e=Object(A.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,o(!0),e.next=6,t.wait();case 6:e.sent.status?(u(l("Successfully claimed!")),c(),n()):(j(l("Error"),l("Please try again. Confirm the transaction and make sure you are paying enough gas!")),o(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(g.qb,{title:l("Claim Collectible"),onDismiss:c,children:[Object(Q.jsx)(Y,{children:Object(Q.jsxs)(g.R,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(Q.jsxs)(g.Xb,{children:[l("You will receive"),":"]}),Object(Q.jsx)(g.Xb,{bold:!0,children:l("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(Q.jsxs)(Z,{children:[Object(Q.jsx)(g.o,{width:"100%",variant:"secondary",onClick:c,children:l("Cancel")}),Object(Q.jsx)(g.o,{width:"100%",onClick:f,disabled:!b,isLoading:s,endIcon:s?Object(Q.jsx)(g.h,{color:"currentColor",spin:!0}):null,children:l("Confirm")})]})]})},H=v.e.div(b||(b=Object(h.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),K=v.e.img(d||(d=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),M=v.e.video(j||(j=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,s="/images/nfts/".concat(c.lg);if(i){var o=Object(Q.jsxs)(M,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(Q.jsx)("source",{src:i.webm,type:"video/webm"}),Object(Q.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(Q.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(Q.jsx)(K,{src:s,alt:a});return Object(Q.jsx)(H,{children:r?Object(Q.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},ee=Object(v.e)(L)(u||(u=Object(h.a)(["\n  min-height: 28px;\n"]))),te=Object(v.e)(g.o).attrs({variant:"text"})(f||(f=Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=v.e.div(O||(O=Object(h.a)(["\n  padding: 24px;\n"]))),re=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,a=e.tokenIds,i=void 0===a?[]:a,s=e.onClaim,o=e.refresh,l=Object(m.useState)(!1),b=Object(D.a)(l,2),d=b[0],j=b[1],u=Object(w.b)().t,f=Object(E.b)().profile,O=n.identifier,p=n.name,x=n.description,h=i.length>0,v=d?g.F:g.C,k=function(){var e=Object(A.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!d);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o()},C=Object(g.wc)(Object(Q.jsx)(B,{nft:n,tokenIds:i,onSuccess:y})),S=Object(D.a)(C,1)[0],I=Object(g.wc)(Object(Q.jsx)(G,{nft:n,onSuccess:y,onClaim:s})),T=Object(D.a)(I,1)[0];return Object(Q.jsxs)(g.s,{isActive:h,children:[Object(Q.jsx)($,{nft:n,isOwned:h}),Object(Q.jsxs)(g.t,{children:[Object(Q.jsxs)(ee,{children:[Object(Q.jsx)(g.T,{children:p}),h&&Object(Q.jsx)(g.Vb,{outline:!0,variant:"secondary",children:u("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(Q.jsx)(g.Vb,{outline:!0,variant:"success",children:u("Profile Pic")})]}),c&&Object(Q.jsx)(g.o,{width:"100%",mt:"24px",onClick:T,children:u("Claim this NFT")}),h&&Object(Q.jsx)(g.o,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:u("Transfer")})]}),Object(Q.jsxs)(g.u,{p:"0",children:[Object(Q.jsx)(te,{width:"100%",endIcon:Object(Q.jsx)(v,{width:"24px",color:"primary"}),onClick:k,children:u("Details")}),d&&Object(Q.jsx)(ne,{children:Object(Q.jsx)(g.Xb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:u(x)})})]})]})},ce=v.e.div(p||(p=Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ae=n(6),ie=n(48),se=["nft"],oe={"easter-storm":1,"easter-flipper":2,"easter-caker":3},le=function(e){var t=e.nft,n=Object(ie.a)(e,se),r=Object(m.useState)(!1),c=Object(D.a)(r,2),a=c[0],i=c[1],s=Object(S.c)().account,o=Object(E.b)().profile,l=t.identifier,b=(null!==o&&void 0!==o?o:{}).team,d=Object(J.k)(),j=function(){var e=Object(A.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){s&&b&&function(){var e=Object(A.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.canClaim(s);case 2:t=e.sent,i(!!t&&b.id===oe[l]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,b,d,i]),Object(Q.jsx)(re,Object(ae.a)(Object(ae.a)({nft:t},n),{},{canClaim:a,onClaim:j}))},be={"easter-storm":le,"easter-flipper":le,"easter-caker":le},de=function(){var e=Object(F.a)().tokenIds,t=Object(T.b)(),n=Object(S.c)().account,r=function(){t(Object(N.b)(n))};return Object(Q.jsx)(ce,{children:C()(I.b,"sortOrder").map((function(t){var n=be[t.identifier]||re;return Object(Q.jsx)("div",{children:Object(Q.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},je=v.e.div(x||(x=Object(h.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(Q.jsxs)(k.a,{children:[Object(Q.jsx)(je,{children:Object(Q.jsx)(g.T,{as:"h1",scale:"xxl",color:"secondary",children:e("Scaryswap Collectibles")})}),Object(Q.jsx)(de,{})]})}},832:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),c=n(37),a=n(32),i=n(69),s=n(155),o=n(371),l=function(){var e=Object(c.c)().account,t=Object(i.b)(),n=Object(a.c)((function(e){return e.collectibles})),l=n.isInitialized,b=n.isLoading,d=n.data,j=Object.keys(d);return Object(r.useEffect)((function(){l||t(Object(o.b)(e))}),[l,e,t]),{isInitialized:l,isLoading:b,tokenIds:d,nftsInWallet:s.b.filter((function(e){return j.includes(e.identifier)}))}}}}]);
//# sourceMappingURL=21.9c904c56.chunk.js.map