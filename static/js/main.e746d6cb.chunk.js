(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,n){e.exports=n.p+"static/media/freecell_bg.b8c3e933.png"},,function(e,a,n){e.exports=n(15)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(4),s=n.n(c),u=(n(13),n(1)),o=n(2),l=(n(14),n(5)),d=n.n(l),i=n(6),m={seqIndex:null,cardIndex:null},g=[],p=function(e){return e.preventDefault(),e.stopPropagation(),!1},b=function(e){var a,n=e.suits,t=e.number,c=e.isDraggable,s=void 0===c||c,o=e.seqArr,l=e.seqIndex,d=e.cardIndex,b=e.updateFunc,E=Object(i.a)(e,["suits","number","isDraggable","seqArr","seqIndex","cardIndex","updateFunc"]);a=n&&t?"card_".concat(n,"_").concat(t):n?"suits_".concat(n):"card_blank";var I="".concat(window.location.origin,"/Images/").concat(a,".png");return r.a.createElement("div",Object.assign({className:"card draggable-card",draggable:s,onDragStart:function(e){!function(e,a){a.suits,a.number;var n=a.cardIndex,t=a.seqArr,r=a.seqIndex;a.updateFunc,g=t[r].slice(n,t[r].length),m.seqIndex=r,m.cardIndex=n}(0,{suits:n,number:t,seqArr:o,seqIndex:l,cardIndex:d,updateFunc:b})},onDragOver:p,onDragEnter:p,onDrop:function(e){!function(e,a){a.suits,a.number,a.cardIndex;var n=a.seqArr,t=a.seqIndex,r=a.updateFunc,c=m.seqIndex,s=m.cardIndex;if(t===c)return!1;n[t]=[].concat(Object(u.a)(n[t]),Object(u.a)(g)),n[c].splice(s,n[t].length),r(Object(u.a)(n)),g=[]}(0,{suits:n,number:t,seqArr:o,seqIndex:l,cardIndex:d,updateFunc:b})},"data-role":"drag-drop-container"},E),r.a.createElement("img",{src:I,style:{width:"135px"}}))},E={SPADE:"spade",HEART:"heart",DIAMOND:"diamond",CLUB:"club"},I=function(e){var a=e.groupData,n=e.seqArr,t=e.seqIndex,c=e.updateFunc;return r.a.createElement("div",{className:"card-sequnece"},a.length>0?a.map(function(e,a){var s={position:"relative",zIndex:a,bottom:"".concat(135*a,"px")};return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(b,{suits:e.suit,number:e.number,cardIndex:a,seqIndex:t,seqArr:n,style:s,updateFunc:c}))}):r.a.createElement(b,{isDraggable:!1,cardIndex:0,seqIndex:t,seqArr:n,updateFunc:c}))},v={backgroundImage:"url(".concat(d.a,")"),width:"100vw"},x=[E.SPADE,E.HEART,E.DIAMOND,E.CLUB],f=[1,2,3,4,5,6,7,8,9,10,11,12,13];var h=function(){var e=Object(t.useState)([]),a=Object(o.a)(e,2),n=a[0],c=a[1],s=Object(t.useState)([]),l=Object(o.a)(s,2),d=l[0],i=l[1];return Object(t.useEffect)(function(){if(0==n.length){for(var e=0,a=x;e<a.length;e++)for(var t=a[e],r=0,s=f;r<s.length;r++){var o=s[r];n.push({suit:t,number:o})}for(var l=0;l<n.length;l++){var m=Math.floor(Math.random()*n.length),g=n[l];n[l]=n[m],n[m]=g}for(var p=7,b=[],E=0;E<n.length;E++)b.push(n[E]),b.length==p&&(d.push(b),b=[],27==E&&(p=6));c(Object(u.a)(n)),i(Object(u.a)(d))}}),r.a.createElement("div",{className:"gameWrapper",style:v},r.a.createElement("div",{className:"top-card-block"},r.a.createElement(b,null),r.a.createElement(b,null),r.a.createElement(b,null),r.a.createElement(b,null),r.a.createElement("div",{className:"timer"},r.a.createElement("h2",null,"TIME"),r.a.createElement("h2",null,"00:00")),r.a.createElement(b,{suits:E.SPADE}),r.a.createElement(b,{suits:E.HEART}),r.a.createElement(b,{suits:E.DIAMOND}),r.a.createElement(b,{suits:E.CLUB})),r.a.createElement("div",{className:"game-block"},d.map(function(e,a){return r.a.createElement(I,{key:a,groupData:e,seqArr:d,seqIndex:a,updateFunc:i})})),r.a.createElement("div",{className:"icon-bar"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.e746d6cb.chunk.js.map