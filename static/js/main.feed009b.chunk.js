(this.webpackJsonpyepstr_test=this.webpackJsonpyepstr_test||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=c(2),u="https://deckofcardsapi.com/api/deck",o=function(e){return fetch("".concat(u,"/").concat(e,"/draw/?count=1")).then((function(e){return e.json()}))},l=function(e){switch(e){case"ACE":return 1;case"JACK":return 11;case"QUEEN":return 12;case"KING":return 13;default:return parseInt(e)}},d=c(0);var j=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(52),s=Object(i.a)(a,2),j=s[0],h=s[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),O=f[0],v=f[1],p=Object(n.useState)({img:"",value:""}),x=Object(i.a)(p,2),m=x[0],g=x[1],k=0===j,N=Object(n.useCallback)((function(){fetch("".concat(u,"/new/shuffle/")).then((function(e){return e.json()})).then((function(e){return v(e.deck_id),e.deck_id})).catch((function(){return console.log("error on fetching deckId")})).then((function(e){return o(e).then((function(e){return g({img:e.cards[0].image,value:e.cards[0].value})}))})).catch((function(e){return console.log("error on fetch",e)}))}),[]);Object(n.useEffect)((function(){N()}),[N]);var w=function(e){o(O).then((function(t){if(j<=0)return alert("Start Again"),0;var c=t.cards[0];c&&void 0!==c&&(function(e,t){var c=l(e),n=l(t);return c>n?1:c===n?0:-1}(c.value,m.value)===e&&r((function(e){return e+1})),g({img:c.image,value:c.value}),h(t.remaining))}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"d-flex p-2",children:Object(d.jsx)("h1",{children:"Cards"})}),Object(d.jsxs)("section",{className:"App-content",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:[Object(d.jsxs)("h2",{className:"score",children:["Score: ",c]}),Object(d.jsxs)("p",{className:"card",children:[" Cards Left: ",j]})]})}),Object(d.jsxs)("div",{className:"play-section",children:[!k&&Object(d.jsx)("button",{onClick:function(){return w(-1)},children:"Next card will be lower"}),j>0&&Object(d.jsx)("img",{src:null===m||void 0===m?void 0:m.img,alt:"selected Card"}),!k&&Object(d.jsx)("button",{onClick:function(){return w(1)},children:"Next card will be Greater"})]}),Object(d.jsx)("div",{children:k&&Object(d.jsx)("button",{onClick:function(){h(52),r(0),N()},children:"Start a new Round"})})]})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.feed009b.chunk.js.map