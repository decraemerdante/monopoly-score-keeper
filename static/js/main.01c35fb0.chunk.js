(this["webpackJsonpmonopoly-score-keeper"]=this["webpackJsonpmonopoly-score-keeper"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),a=n.n(r),s=n(8),i=n(11),j=n(23),d={ADD_PLAYER:"ADD_PLAYER",GET_PLAYERS:"GET_PLAYERS",GET_PLAYER_BY_ID:"GET_PLAYER_BY_ID",ADD_TRANSACTION:"ADD_TRANSACTION",BANK:"Bank",FREE_PARKING:"Free parking",ADD_SALARY:"ADD_SALARY"};function b(e,t){this.amount=e,this.receiver=t}function l(e){this.name=e,this.budget=1500,this.transactions=[new b(1500,d.BANK)]}var o=new l(d.FREE_PARKING);o.budget=0;var u=new l(d.BANK);u.budget=1e7;var O=[u,o,new l("Dante")];function h(e,t){var n=e[t.payload.id],c=e.find((function(e){return e.name==t.payload.receiver})),r=parseInt(t.payload.transaction);return n=m(t.payload.receiver,-1*r,n),c=m(n.name,r,c),e}function m(e,t,n){return n.budget+=t,n.transactions.push(new b(t,e)),n}var x=Object(i.b)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.ADD_PLAYER:return[].concat(Object(j.a)(e),[t.payload]);case d.GET_PLAYER_BY_ID:return e[t.payload];case d.ADD_TRANSACTION:case d.ADD_SALARY:var n=Object(j.a)(e);return n=h(n,t);default:return e}}}),p=n(24);n(32),n(33),n(34),n.p,n(35);var v=n(3),f=n(9),N=n(0);var A=function(e){var t=e.player,n=Object(s.b)();return Object(N.jsx)("span",{children:t.name!=d.BANK&&t.name!=d.FREE_PARKING?Object(N.jsxs)("button",{className:"btn btn-success me-3",onClick:function(){var e;n((e=t.name,function(t){t({type:d.ADD_SALARY,payload:{id:0,transaction:200,receiver:e}})}))},children:[Object(N.jsx)("i",{className:"bi bi-cash"})," Salary"]}):Object(N.jsx)("div",{})})};var y=function(e){var t=e.player,n="/transaction/add/".concat(e.number);return Object(N.jsxs)("tr",{children:[Object(N.jsxs)("td",{children:[t.name," (",e.number,")"]}),Object(N.jsx)("td",{children:t.budget}),Object(N.jsxs)("td",{children:[Object(N.jsx)(f.b,{to:n,className:"btn btn-primary me-3",children:"Add transaction"}),Object(N.jsx)(A,{player:t})]})]})};var g=function(){var e=Object(s.c)((function(e){return e.players}));return Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-12 border border-1 rounded p-3 mt-3",children:Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Budget"}),Object(N.jsx)("th",{children:"Actions"})]})}),Object(N.jsxs)("tbody",{children:[e&&e.length>0?e.map((function(e,t){return Object(N.jsx)(y,{player:e,number:t})})):Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:3,children:"No players found"})}),Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:3,children:Object(N.jsx)(f.b,{to:"/add",children:"Add player"})})})]})]})})})},_=n(22),D=n(14);var E=function(){var e,t=Object(c.useState)(""),n=Object(D.a)(t,2),r=n[0],a=n[1],i=Object(s.b)(),j=Object(v.f)();return Object(N.jsx)("div",(e={className:"col-12"},Object(_.a)(e,"className"," border border-1 rounded p-3 mt-3"),Object(_.a)(e,"children",Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new l(r);i(function(e){return function(t){t({type:d.ADD_PLAYER,payload:e})}}(t)),j.push("/list")},children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{for:"name",children:"Name"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"name",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Submit"})})]})),e))};var R=function(e){var t=e.player;return Object(N.jsxs)("div",{className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsx)("h3",{children:"History"}),Object(N.jsxs)("table",{className:"mt-3 table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Transaction"}),Object(N.jsx)("th",{children:"Receiver"})]})}),Object(N.jsx)("tbody",{children:t.transactions&&t.transactions.length>0?t.transactions.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.amount}),Object(N.jsx)("td",{children:e.receiver})]})})):Object(N.jsx)("tr",{children:Object(N.jsx)("td",{children:"No transactions found"})})})]})]})};var S=function(){var e=Object(v.g)().id,t=Object(s.b)(),n=Object(c.useState)(""),r=Object(D.a)(n,2),a=r[0],i=r[1],j=Object(c.useState)(d.BANK),b=Object(D.a)(j,2),l=b[0],o=b[1],u=Object(s.c)((function(e){return e.players})),O=u[e];return Object(N.jsxs)("div",{children:[O?Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("h1",{children:O.name}),Object(N.jsxs)("h2",{children:["Budget: ",O.budget]}),Object(N.jsxs)("div",{className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsx)("h3",{children:"Quick actions"}),Object(N.jsx)(A,{player:O})]}),Object(N.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(function(e,t,n){return function(c){c({type:d.ADD_TRANSACTION,payload:{id:e,transaction:t,receiver:n}})}}(e,a,l))},className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsxs)("div",{className:"form-group col-12",children:[Object(N.jsx)("label",{for:"number",children:"Amount:"}),Object(N.jsxs)("div",{className:"input-group",children:[Object(N.jsx)("input",{type:"number",className:"form-control",id:"budget",value:a,min:"0",onChange:function(e){return i(e.target.value)},required:!0}),Object(N.jsx)("div",{className:"input-group-append",children:Object(N.jsxs)("span",{className:"input-group-text",children:["--\x3e ",l]})})]})]}),Object(N.jsx)("div",{className:"form-group mt-3",children:u&&u.length>0?u.map((function(e,t){var n=function(e){switch(e){case d.BANK:return"btn btn-dark me-3";case d.FREE_PARKING:return"btn btn-secondary me-3";default:return"btn btn-outline-primary me-3"}}(e.name);return Object(N.jsx)("button",{type:"button",className:n,id:e.name,onClick:function(e){return o(e.target.id)},children:e.name})})):Object(N.jsx)("div",{})}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("button",{type:"submit",className:"btn btn-primary  mt-3",children:"Submit"})})]}),Object(N.jsx)(R,{player:O})]}):Object(N.jsx)("div",{children:"Player not found"}),Object(N.jsx)(f.b,{to:"/list",className:"btn btn-light float-end mt-3",children:"Back"})]})};var T=function(){return Object(N.jsx)("div",{className:"App container",children:Object(N.jsx)("div",{className:"col-12",children:Object(N.jsxs)(v.c,{children:[Object(N.jsx)(v.a,{exact:!0,path:"/",children:Object(N.jsx)(g,{})}),Object(N.jsx)(v.a,{path:"/list",children:Object(N.jsx)(g,{})}),Object(N.jsx)(v.a,{exact:!0,path:"/add",children:Object(N.jsx)(E,{})}),Object(N.jsx)(v.a,{path:"/transaction/add/:id",children:Object(N.jsx)(S,{})})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},L=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c;return Object(i.d)(x,e,t(Object(i.a)(p.a)))}();a.a.render(Object(N.jsx)(s.a,{store:L,children:Object(N.jsx)(f.a,{basename:"/monopoly-score-keeper",children:Object(N.jsx)(T,{})})}),document.getElementById("root")),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.01c35fb0.chunk.js.map