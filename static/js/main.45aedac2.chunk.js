(this.webpackJsonpreactintro=this.webpackJsonpreactintro||[]).push([[0],{269:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(86),c=n.n(r),l=(n(97),n(13)),i=n(87),u=n.n(i);function d(e){var t=Object(o.useState)(0),n=Object(l.a)(t,2),r=n[0],c=n[1];return a.a.createElement("button",{onClick:function(e){c(r+1)}},r)}function s(e){function t(t){e.onCardMove(e._id,t)}console.log(e);var n={backgroundColor:e.color};return a.a.createElement("li",null,a.a.createElement("h3",null,e.title),a.a.createElement("p",{style:n},e.color),a.a.createElement(d,null),a.a.createElement("button",{onClick:function(){e.onCardDelete(e._id)}},"Delete Me"),a.a.createElement("button",{onClick:function(){return t("todo")}},"Move to toDo"),a.a.createElement("button",{onClick:function(){return t("doing")}},"Move to Doing"),a.a.createElement("button",{onClick:function(){return t("done")}},"Move to Done"))}var m=n(88),f=n.n(m),h=n(89),b=n.n(h),C=n(90),p=n(91),v=n.n(p);function E(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(o.useState)("#bada55"),u=Object(l.a)(i,2),d=u[0],s=u[1];return a.a.createElement("form",{className:v.a.cardForm,onSubmit:function(t){t.preventDefault(),e.onFormSubmit({title:r,list:"todo",added:Date.now(),color:d,assignedTo:["jofh"]}),c(""),s("#bada55")}},a.a.createElement(b.a,{label:"Title",floatingLabel:!0,type:"text",onChange:function(e){c(e.target.value)},name:"title",value:r}),"Color",a.a.createElement(C.TwitterPicker,{value:d,onChange:function(e){s(e.hex)}}),a.a.createElement(f.a,{color:"primary",disabled:0===r.length,type:"submit"},"Save"))}function g(e){console.log(e);var t=e.cards.map((function(t){return a.a.createElement(s,Object.assign({onCardDelete:e.onCardDelete,onCardMove:e.onCardMove,key:t._id},t))}));return a.a.createElement(u.a,null,a.a.createElement("h2",null,e.header),a.a.createElement("ul",null,t),a.a.createElement(E,{onFormSubmit:e.onFormSubmit}))}function j(e){var t=e.cards,n=e.onFormSubmit,o=e.onCardDelete,r=e.onCardMove;return console.log(t),a.a.createElement("main",null,a.a.createElement("h1",null,"Kanban"),a.a.createElement(g,{onFormSubmit:n,onCardDelete:o,onCardMove:r,cards:t.filter((function(e){return"todo"===e.list})),header:"ToDo"}),a.a.createElement(g,{onFormSubmit:n,onCardDelete:o,onCardMove:r,cards:t.filter((function(e){return"doing"===e.list})),header:"Doing"}),a.a.createElement(g,{onFormSubmit:n,onCardDelete:o,onCardMove:r,cards:t.filter((function(e){return"done"===e.list})),header:"Done"}))}function y(){return a.a.createElement("nav",null)}var D="https://todolist-27a8.restdb.io/rest/tasks",S="5ea19c0d919b360ce59b7c44";var k={getCards:function(e){fetch(D,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":S,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(t){return e(t)}))},addCard:function(e,t,n){var o=JSON.stringify(n);fetch(D,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":S,"cache-control":"no-cache"},body:o}).then((function(e){return e.json()})).then((function(n){return e(t.concat(n))}))},moveCard:function(e,t){var n=JSON.stringify(e);fetch(D+"/"+t,{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":S,"cache-control":"no-cache"},body:n}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},deleteCard:function(e){fetch(D+"/"+e,{method:"delete",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":S,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}};function F(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){k.getCards(r)}),[]),a.a.createElement("div",{className:"App"},a.a.createElement(y,null),0===n.length&&a.a.createElement("h2",null,"Loading"),a.a.createElement(j,{onCardDelete:function(e){var t=n.filter((function(t){return t._id!==e}));k.deleteCard(e),r(t)},onCardMove:function(e,t){console.log(e,t);var o=n.map((function(n){return n._id===e&&(n.list=t),n}));k.moveCard({list:t},e),r(o)},onFormSubmit:function(e){console.log("form submitted",e),k.addCard(r,n,e)},cards:n}))}c.a.render(a.a.createElement(F,null),document.getElementById("root"))},91:function(e,t,n){e.exports={cardForm:"Form_cardForm__3qvh_"}},92:function(e,t,n){e.exports=n(269)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.45aedac2.chunk.js.map