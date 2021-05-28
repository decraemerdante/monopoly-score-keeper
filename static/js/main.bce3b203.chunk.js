(this["webpackJsonpmonopoly-score-keeper"]=this["webpackJsonpmonopoly-score-keeper"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),a=n.n(r),s=n(7),i=n(11),o=n(23),l={ADD_PLAYER:"ADD_PLAYER",GET_PLAYERS:"GET_PLAYERS",GET_PLAYER_BY_ID:"GET_PLAYER_BY_ID",ADD_TRANSACTION:"ADD_TRANSACTION",BANK:"Bank",FREE_PARKING:"Free parking",ADD_SALARY:"ADD_SALARY",CLEAR_GAME:"CLEAR_GAME"};function d(e,t){this.amount=e,this.receiver=t}function j(e){this.name=e,this.budget=1500,this.transactions=[new d(1500,l.BANK)]}var b=new j(l.FREE_PARKING);b.budget=0;var u=new j(l.BANK);u.budget=1e7;var m=[u,b];function O(e,t){var n=e[t.payload.id],c=e.find((function(e){return e.name==t.payload.receiver})),r=parseInt(t.payload.transaction);return n=h(t.payload.receiver,-1*r,n),c=h(n.name,r,c),e}function h(e,t,n){return n.budget+=t,n.transactions.push(new d(t,e)),n}var p=Object(i.b)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=Object(o.a)(e);switch(localStorage.getItem("state")&&(n=JSON.parse(localStorage.getItem("state"))),t.type){case l.ADD_PLAYER:n=[].concat(Object(o.a)(n),[t.payload]);break;case l.GET_PLAYER_BY_ID:n=n[t.payload];break;case l.ADD_TRANSACTION:case l.ADD_SALARY:n=O(n,t);break;case l.CLEAR_GAME:localStorage.removeItem("state"),n=m}return localStorage.setItem("state",JSON.stringify(n)),n}}),x=n(24);n(32),n(33),n(34),n.p,n(35);var v=n(3),f=n(9),N=n(0);var A=function(e){var t=e.player,n=Object(s.b)();return Object(N.jsx)("span",{children:t.name!=l.BANK&&t.name!=l.FREE_PARKING?Object(N.jsxs)("button",{className:"btn btn-success me-3",onClick:function(){var e;n((e=t.name,function(t){t({type:l.ADD_SALARY,payload:{id:0,transaction:200,receiver:e}})}))},children:[Object(N.jsx)("i",{className:"bi bi-cash"})," Salary"]}):Object(N.jsx)("div",{})})};var y=function(e){var t=e.player,n="/transaction/add/".concat(e.number);return Object(N.jsx)("div",{className:"border border-1 rounded p-3 mt-3",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-6",children:Object(N.jsx)("h3",{children:Object(N.jsx)(f.b,{to:n,children:t.name})})}),Object(N.jsx)("div",{className:"col-6",children:Object(N.jsx)("h3",{children:t.budget})}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)(A,{player:t})})]})})};var g=function(){var e=Object(s.c)((function(e){return e.players})),t=Object(s.b)();return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"row",children:e&&e.length>0?e.map((function(e,t){return Object(N.jsx)(y,{player:e,number:t})})):Object(N.jsx)("h2",{children:"No players found"})}),Object(N.jsxs)("div",{className:"row border border-1 rounded p-3 mt-3",children:[Object(N.jsx)("div",{className:"col-6 p-0",children:Object(N.jsxs)(f.b,{to:"/add",className:"btn btn-primary",children:[Object(N.jsx)("i",{className:"bi bi-plus"})," Add player"]})}),Object(N.jsx)("div",{className:"col-6 p-0",children:Object(N.jsx)("button",{className:"btn btn-danger float-end",onClick:function(e){e.preventDefault(),t((function(e){e({type:l.CLEAR_GAME})}))},children:"Clear game"})})]})]})},_=n(22),E=n(14);var D=function(){var e,t=Object(c.useState)(""),n=Object(E.a)(t,2),r=n[0],a=n[1],i=Object(s.b)(),o=Object(v.f)();return Object(N.jsx)("div",(e={className:"col-12"},Object(_.a)(e,"className"," border border-1 rounded p-3 mt-3"),Object(_.a)(e,"children",Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new j(r);i(function(e){return function(t){t({type:l.ADD_PLAYER,payload:e})}}(t)),o.push("/list")},children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{for:"name",children:"Name"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"name",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Submit"})})]})),e))};var R=function(e){var t=e.player;return Object(N.jsxs)("div",{className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsx)("h3",{children:"History"}),Object(N.jsxs)("table",{className:"mt-3 table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Transaction"}),Object(N.jsx)("th",{children:"Receiver"})]})}),Object(N.jsx)("tbody",{children:t.transactions&&t.transactions.length>0?t.transactions.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.amount}),Object(N.jsx)("td",{children:e.receiver})]})})):Object(N.jsx)("tr",{children:Object(N.jsx)("td",{children:"No transactions found"})})})]})]})};var S=function(){var e=Object(v.g)().id,t=Object(s.b)(),n=Object(c.useState)(""),r=Object(E.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(l.BANK),d=Object(E.a)(o,2),j=d[0],b=d[1],u=Object(s.c)((function(e){return e.players})),m=u[e];return u=u.filter((function(e){return e.name!=m.name})),Object(N.jsxs)("div",{children:[m?Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("h1",{children:m.name}),Object(N.jsxs)("h2",{children:["Budget: ",m.budget]}),Object(N.jsxs)("div",{className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsx)("h3",{children:"Quick actions"}),Object(N.jsx)(A,{player:m})]}),Object(N.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(function(e,t,n){return function(c){c({type:l.ADD_TRANSACTION,payload:{id:e,transaction:t,receiver:n}})}}(e,a,j)),i(0),b(l.BANK)},className:"border border-1 rounded p-3 mt-3",children:[Object(N.jsxs)("div",{className:"form-group col-12",children:[Object(N.jsx)("label",{for:"number",children:"Amount:"}),Object(N.jsxs)("div",{className:"input-group",children:[Object(N.jsx)("input",{type:"number",className:"form-control",id:"budget",value:a,min:"0",onChange:function(e){return i(e.target.value)},required:!0}),Object(N.jsx)("div",{className:"input-group-append",children:Object(N.jsxs)("span",{className:"input-group-text",children:["--\x3e ",j]})})]})]}),Object(N.jsx)("div",{className:"form-group mt-3",children:u&&u.length>0?u.map((function(e,t){var n=function(e){switch(e){case l.BANK:return"btn btn-dark me-3";case l.FREE_PARKING:return"btn btn-secondary me-3";default:return"btn btn-outline-primary me-3"}}(e.name);return Object(N.jsx)("button",{type:"button",className:n,id:e.name,onClick:function(e){return b(e.target.id)},children:e.name})})):Object(N.jsx)("div",{})}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("button",{type:"submit",className:"btn btn-primary  mt-3",children:"Submit"})})]}),Object(N.jsx)(R,{player:m})]}):Object(N.jsx)("div",{children:"Player not found"}),Object(N.jsx)(f.b,{to:"/list",className:"btn btn-light float-end mt-3",children:"Back"})]})};var w=function(){return Object(N.jsx)("div",{className:"App container",children:Object(N.jsx)("div",{className:"col-12",children:Object(N.jsxs)(v.c,{children:[Object(N.jsx)(v.a,{exact:!0,path:"/",children:Object(N.jsx)(g,{})}),Object(N.jsx)(v.a,{path:"/list",children:Object(N.jsx)(g,{})}),Object(N.jsx)(v.a,{exact:!0,path:"/add",children:Object(N.jsx)(D,{})}),Object(N.jsx)(v.a,{path:"/transaction/add/:id",children:Object(N.jsx)(S,{})})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c;return Object(i.d)(p,e,t(Object(i.a)(x.a)))}();a.a.render(Object(N.jsx)(s.a,{store:I,children:Object(N.jsx)(f.a,{basename:"/monopoly-score-keeper",children:Object(N.jsx)(w,{})})}),document.getElementById("root")),L()}},[[39,1,2]]]);
//# sourceMappingURL=main.bce3b203.chunk.js.map