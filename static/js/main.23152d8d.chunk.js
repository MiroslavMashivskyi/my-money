(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{136:function(e,t,n){e.exports=n(261)},141:function(e,t,n){},142:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),o=n.n(c),u=(n(141),n(142),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Manage your expenses!"))}),l=n(14),i=n(107),m={},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NOTE-NOTE":return e[t.date]?e[t.date]=[].concat(Object(i.a)(e[t.date]),[{goodsName:t.goodsName,amount:t.amount,currency:t.currency}]):e[t.date]=[{goodsName:t.goodsName,amount:t.amount,currency:t.currency}],Object(l.a)({},e);case"LIST":var n={};return Object.keys(e).sort().forEach((function(t){n[t]=e[t]})),n;case"CLEAR":return delete e[t.date],Object(l.a)({},e);default:return e}},d=n(7),f=n(96),E=n(97),b=n(100),p=n(101),y=n(110),h=n(108),v=function(e){Object(y.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.setCurrencies()}},{key:"render",value:function(){return this.props.currenciesList.length>0?this.props.currenciesList.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})):null}}]),n}(a.Component),N=n(62),O=n.n(N),g=n(102),j=n(103),w=function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("http://data.fixer.io/api/latest?access_key=ab00cc4fd0db3123de763c9c47e14cdc").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k={currencies:[]},C="currency_reducer/CURRENCIES",S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return e.currencies=t.currencies,Object(l.a)({},e);default:return e}},T=Object(d.b)((function(e){return{currenciesList:e.currencies.currencies}}),{setCurrencies:function(){return function(e){w().then((function(t){return e((n=Object.keys(t.rates),{type:C,currencies:n}));var n}))}}})(v),A=function(e){var t={};return e.date||(t.date="Field is required"),e.amount?e.amount<1&&(t.amount="The number must be positive"):t.amount="Field is required",e.currency||(t.currency="Field is required"),e.goodsName||(t.goodsName="Field is required"),t},D=function(e){var t=e.input,n=e.type,a=e.meta,c=a.touched,o=a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({},t,{type:n})),r.a.createElement("br",null),c&&o&&r.a.createElement("span",{className:"renderField"},o))},L=n(109),F=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,o=Object(L.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",Object.assign({},t,o)),r.a.createElement("br",null),a&&c&&r.a.createElement("span",{className:"renderField"},c))},R=Object(E.a)({form:"add",validate:A})((function(e){return r.a.createElement("form",{className:"form add",onSubmit:e.handleSubmit},r.a.createElement("button",{className:"button"},"Add"),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Date"),r.a.createElement(f.a,{component:D,name:"date",type:"date"})),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Amount"),r.a.createElement(f.a,{component:D,name:"amount",type:"number"})),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Currency"),r.a.createElement(f.a,{component:F,name:"currency"},r.a.createElement("option",null),r.a.createElement(T,null))),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Name"),r.a.createElement(f.a,{component:D,name:"goodsName",type:"text"})))})),x=function(e){return r.a.createElement(R,{onSubmit:function(t){var n=t.date,a=t.amount,r=t.currency,c=t.goodsName;t.reset;e.addNote(n,a,r,c),e.add(a,r),e.reset("add"),e.clear()}})},M={collection:[],total:{amount:null,currency:null}},q=function(){return{type:"CLEAR"}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.collection.push([+t.amount,t.currency]),Object(l.a)({},e);case"TOTAL":return 0===t.i&&(e.total.amount=0),e.total.amount+=Math.round(1/t.from*t.amount*100)/100,e.total.currency=t.currency,Object(l.a)({},e);case"CLEAR":return e.total.amount=null,e.total.currency=null,Object(l.a)({},e);default:return e}},_=n(13),W=Object(d.b)((function(){return{}}),{addNote:function(e,t,n,a){return{type:"ADD_NOTE-NOTE",date:e,amount:t,currency:n,goodsName:a}},add:function(e,t){return{type:"ADD",amount:e,currency:t}},clear:q,reset:_.a})(x),B=function(e){return r.a.createElement("div",{className:"list"},r.a.createElement("button",{className:"button",onClick:function(){e.list(),e.clear()}},"List"))},J=Object(d.b)((function(){return{}}),{list:function(){return{type:"LIST"}},clear:q})(B),U=Object(E.a)({form:"clear",validate:A})((function(e){return r.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},r.a.createElement("button",{className:"button"},"Clear"),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Date"),r.a.createElement(f.a,{component:D,type:"date",name:"date"})))})),$=function(e){return r.a.createElement(U,{onSubmit:function(t){var n=t.date;e.clearNote(n),e.reset("clear"),e.clear()}})},z=Object(d.b)((function(){return{}}),{clearNote:function(e){return{type:"CLEAR",date:e}},clear:q,reset:_.a})($),G=Object(E.a)({form:"total",validate:A})((function(e){return r.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},r.a.createElement("button",{className:"button"},"Total"),r.a.createElement("fieldset",{className:"fieldset"},r.a.createElement("legend",null,"Currency"),r.a.createElement(f.a,{component:F,name:"currency"},r.a.createElement("option",null),r.a.createElement(T,null))))})),H=function(e){return r.a.createElement(G,{onSubmit:function(t){var n=t.currency;e.converter(e.collection,n,e.amount),e.reset("total")}})},K=Object(d.b)((function(e){return{collection:e.total.collection}}),{converter:function(e,t){return function(n){w().then((function(a){e.forEach((function(e,r){n(function(e,t,n,a){return{type:"TOTAL",from:e,amount:t,currency:n,i:a}}(a.rates[e[1]],e[0],t,r))}))}))}},reset:_.a})(H),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(J,null),r.a.createElement(z,null),r.a.createElement(K,null))},Q=function(e){var t=e.history,n=e.total,a=Object.entries(t);return r.a.createElement("section",null,a.map((function(e,t){return r.a.createElement("div",{key:t},e[0],e[1].map((function(e){return r.a.createElement("div",{key:t+Math.random()},e.goodsName,"\xa0",e.amount,"\xa0",e.currency)})))})),r.a.createElement("br",null),r.a.createElement("div",null,n.total.amount,"\xa0",n.total.currency))},V=Object(d.b)((function(e){return{history:e.history,total:e.total}}))(Q);var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(P,null),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(6),Z=n(98),ee=n(105),te=n(106),ne=Object(Y.combineReducers)({form:Z.a,history:s,total:I,currencies:S}),ae=Object(Y.createStore)(ne,Object(te.composeWithDevTools)(Object(Y.applyMiddleware)(ee.a)));window.store=ae;var re=ae;o.a.render(r.a.createElement(d.a,{store:re},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.23152d8d.chunk.js.map